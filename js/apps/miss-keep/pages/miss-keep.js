import noteList from '../cmps/note-list.js'
import { missKeepService } from '../services/miss-keep-service.js'
// import { eventBus , EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section>
        <section class="add-new-note">
            <input type="text" v-model="title" placeholder="Enter note title.."/>
            <input type="text" v-model="txt" :placeholder="placeholder" @keyup.enter="onAddNotes"/>
            <button @click.stop="setNoteTxt"><img src="../../assets/icons/text.png"/></button>
            <button @click.stop="setNoteImg"><img src="../../assets/icons/picture.png"/></button>
            <button @click.stop="setNoteVideo"><img src="../../assets/icons/video.png"/></button>
            <button @click.stop="setNoteTodos"><img src="../../assets/icons/list.png"/></button>
        </section>
            <note-list :notes="notes" @remove-note="removeNote" @update-note="updateNote"/>      
    </section>
    `,
    data() {
        return {
            notes: [],
            title: null,
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
            switch (this.noteByType) {
                case 'note-img':
                    missKeepService.createNoteImg(JSON.parse(JSON.stringify(this.txt)),JSON.parse(JSON.stringify(this.title)));
                    missKeepService.getNotes()
                        .then(notes => this.notes = notes);
                    break;
                case 'note-video':
                    missKeepService.createNoteVideo(JSON.parse(JSON.stringify(this.txt)),JSON.parse(JSON.stringify(this.title)));
                    missKeepService.getNotes()
                        .then(notes => this.notes = notes);
                    break;
                case 'note-list':
                    missKeepService.createNoteTodos(JSON.parse(JSON.stringify(this.txt)),JSON.parse(JSON.stringify(this.title)));
                    missKeepService.getNotes()
                        .then(notes => this.notes = notes);
                    break;
                default:
                    missKeepService.createNoteText(JSON.parse(JSON.stringify(this.txt)),JSON.parse(JSON.stringify(this.title)));
                    missKeepService.getNotes()
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
            missKeepService.update(note)
                .then(notes => this.notes = notes);
        }
    },
    computed: {

    },
    created() {
        missKeepService.getNotes()
            .then(notes => this.notes = notes)
    },
    components: {
        noteList
    }
}
