import { missKeepService } from '../services/miss-keep-service.js'
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
            </li>   
        </ul>     
    </section>
    `,
    data() {
        return {
        }
    },
    methods: {
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