import noteList from '../cmps/note-list.js'
import { missKeepService } from '../services/miss-keep-service.js'
// import { eventBus , EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section >
        <section class="note-filter">
            <input class="clean-input" type="text" v-model="filterByTitle" placeholder="Search Note...">
        </section>
        <section>
            <input class="input-title clean-input" type="text" v-model="title" placeholder="Enter note title.."/>
        </section>

        <section class="add-new-note clean-input flex space-between">
            <section class="add-new-note-input">
                <input type="text" v-model="txt" :placeholder="placeholder" @keyup.enter="onAddNotes"/>
            </section>
            <section class="add-new-note-btn">
                <button @click.stop="setNoteTxt"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"/></svg></button>
                <button @click.stop="setNoteImg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/></svg></button>
                <button @click.stop="setNoteVideo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></button>
                <button @click.stop="setNoteTodos"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg></button>
            </section>
        </section>
            <note-list v-if="notes.length > 0" :notes="notesToShow" @remove-note="removeNote" @update-note="updateNote" @copy-note="copyNote"/>      
    </section>
    `,
    data() {
        return {
            notes: [],
            title: null,
            filterByTitle: null,
            txt: null,
            noteByType: '',
            placeholder: 'Whats on your mind..'
        }
    },
    methods: {
        setNoteTxt() {
            this.noteByType = 'note-text'
            this.placeholder = 'Whats on your mind..'
        },
        setNoteImg() {
            this.noteByType = 'note-img'
            this.placeholder = 'Enter img URL..'
        },
        setNoteVideo() {
            this.noteByType = 'note-video'
            this.placeholder = 'Enter video URL..'
        },
        setNoteTodos() {
            this.noteByType = 'note-list'
            this.placeholder = 'Enter comma seperated list..'
        },
        onAddNotes() {
            let newNote;
            switch (this.noteByType) {
                case 'note-img':
                    newNote = missKeepService.createNoteImg(JSON.parse(JSON.stringify(this.txt)), JSON.parse(JSON.stringify(this.title)));
                    missKeepService.updeteNotes(newNote)
                        .then(notes => this.notes = notes);
                    break;
                case 'note-video':
                    newNote = missKeepService.createNoteVideo(JSON.parse(JSON.stringify(this.txt)), JSON.parse(JSON.stringify(this.title)));
                    missKeepService.updeteNotes(newNote)
                        .then(notes => this.notes = notes);
                    break;
                case 'note-list':
                    newNote = missKeepService.createNoteTodos(JSON.parse(JSON.stringify(this.txt)), JSON.parse(JSON.stringify(this.title)));
                    missKeepService.updeteNotes(newNote)
                        .then(notes => this.notes = notes);
                    break;
                default:
                    newNote = missKeepService.createNoteText(JSON.parse(JSON.stringify(this.txt)), JSON.parse(JSON.stringify(this.title)));
                    missKeepService.updeteNotes(newNote)
                        .then(notes => this.notes = notes);
            }
            this.txt = '';
            this.title = '';
            console.log(this.notes);
        },
        removeNote(noteId) {
            missKeepService.remove(noteId)
                .then(notes => this.notes = notes);
        },
        updateNote(note) {
            console.log('miss keep', note);
            missKeepService.update(note)
                .then(notes => this.notes = notes)
        },
        copyNote(note) {
            missKeepService.copy(note)
                .then(notes => this.notes = notes);
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterByTitle) return this.notes;
            const txt = this.filterByTitle.toLowerCase();
            return this.notes.filter(note => note.info.title.toLowerCase().includes(txt))
        }
    },
    created() {
        missKeepService.createNotes()
            .then(notes => {
                this.notes = JSON.parse(JSON.stringify(notes))
                console.log(this.notes)
            })
    },
    components: {
        noteList
    }
}
