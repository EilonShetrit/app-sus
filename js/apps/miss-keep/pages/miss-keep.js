import noteList from '../cmps/note-list.js'
import { missKeepService } from '../services/miss-keep-service.js'
// import { eventBus , EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section>
        <section class="note-filter">
            <input type="text" v-model="filterByTitle">
        </section>
        <section class="add-new-note">
            <input type="text" v-model="title" placeholder="Enter note title.."/>
            <input type="text" v-model="txt" :placeholder="placeholder" @keyup.enter="onAddNotes"/>
            <button @click.stop="setNoteTxt"><img src="../../assets/icons/text.png"/></button>
            <button @click.stop="setNoteImg"><img src="../../assets/icons/picture.png"/></button>
            <button @click.stop="setNoteVideo"><img src="../../assets/icons/video.png"/></button>
            <button @click.stop="setNoteTodos"><img src="../../assets/icons/list.png"/></button>
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
