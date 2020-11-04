import { missKeepService } from '../services/miss-keep-service.js'
import notePreview from '../cmps/note-preview.js'


export default {
    template: `
    <section>
        <h1>miss keep..</h1> 
        <ul>
            <li v-for="note in notes" :key="note.id">
                <note-preview :note="note"></note-preview>
            </li>
        </ul>     
    </section>
    `,
    data() {
        return {
            notes: [],
        }
    },
    methods: {
    },
    computed: {
        
    },
    created() {
        missKeepService.getNotes()
            .then(notes => this.notes = notes)
    },
    components:{
        notePreview
    }
}