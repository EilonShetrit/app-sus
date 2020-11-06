
import noteText from '../cmps/note-text.js'
import noteImg from '../cmps/note-img.js'
import noteTodos from '../cmps/note-todos.js'
import noteVideo from '../cmps/note-video.js'


export default {
    props:['notes'],
    template: `
    <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id">
                <component :is="note.type"
                           :note="note">
                </component> 
                <button @click="emitRemove(note.id)">delete</button>
            </li>   
        </ul>     
    </section>
    `,
    // data() {
        
    // },
    methods: {
        emitRemove(noteId){
            console.log('removing', noteId);
            this.$emit('remove', noteId);
        },
        emitEdit(noteId){
            console.log('editing', noteId);
            this.$emit('edit', noteId);
        },
    },
    computed: {
    },
    created() {
    },
    components:{
        noteText,
        noteImg,
        noteTodos,
        noteVideo
    }
}