import noteList from '../cmps/note-list.js'
import { missKeepService } from '../services/miss-keep-service.js'


export default {
    template: `
    <section>
        <form @keyup.enter="setNotes">
            <input type="text" v-model="txt" :placeholder="placeholder"/>
            <button @click="setNoteTxt"><img src="../../assets/icons/text.png"/></button>
            <button @click="setNoteImg"><img src="../../assets/icons/picture.png"/></button>
            <button @click="setNoteVideo"><img src="../../assets/icons/video.png"/></button>
            <button @click="setNoteTodos"><img src="../../assets/icons/list.png"/></button>
        </form>
            <note-list :notes="notes"></note-list>      
    </section>
    `,
    data() {
        return {
            notes: [],
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
            console.log(this.noteByType);
        },
        setNoteVideo() {
            this.noteByType = 'note-video'
            this.placeholder = 'Enter video URL..'
        },
        setNoteTodos() {
            this.noteByType = 'note-list'
            this.placeholder = 'Enter comma seperated list..'
        },
        setNotes() {
            console.log(this.noteByType);
            switch(this.noteByType){
                case 'note-img':
                    const noteImg = missKeepService.createNoteImg(JSON.parse(JSON.stringify(this.txt)))
                    this.notes.push(noteImg);
                    break;
                case 'note-video':
                    const noteVideo = missKeepService.createNoteVideo(JSON.parse(JSON.stringify(this.txt)))
                    this.notes.push(noteVideo);
                    break;
                case 'note-list':
                    const noteTodos = missKeepService.createNoteTodos(JSON.parse(JSON.stringify(this.txt)))
                    this.notes.push(noteTodos);
                    break;
                default:
                    const noteTxt = missKeepService.createNoteText(JSON.parse(JSON.stringify(this.txt)))
                    this.notes.push(noteTxt);
            }
            this.txt = ''
            console.log(this.notes);
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