import { eventBus , EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'
import noteText from '../cmps/note-text.js'
import noteImg from '../cmps/note-img.js'
import noteTodos from '../cmps/note-todos.js'
import noteVideo from '../cmps/note-video.js'



export default {
    props:['notes'],
    template: `
    <section class="note-list">
        <ul>
            <li class="note-container" v-for="note in notes" :key="note.id">
                <component :is="note.type"
                           :note="note"
                            @remove-note="removeNote"
                            @update-note="updateNote"
                            @copy-note="copyNote">
                </component> 
            </li>       
        </ul>     
    </section>
    `,
    data(){
        return{
            currNotes: []
        }
    },
    methods: {
        removeNote(noteId) {
            this.$emit('remove-note', noteId)
        },
        updateNote(note) {
            this.$emit('update-note', note)
        },
        copyNote(note){
            this.$emit('copy-note', note) 
        }
    },
    computed: {
    },
    created() {
        this.currNotes = this.notes
        console.log(JSON.parse(JSON.stringify(this.notes)));
    },
    components:{
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
    }
}