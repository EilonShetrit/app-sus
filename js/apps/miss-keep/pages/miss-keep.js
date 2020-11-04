import { missKeepService } from '../services/miss-keep-service.js'


export default {
    template: `
    <section>
        <h1>miss keep..</h1> 
        <section v-for="note in notes">
        <h2></h2>
        </section>
        {{notes}}      
    </section>
    `,
    data(){
        return {
            notes: [],

        }
    },
    methods:{

    },
    computed:{

    },
    created(){
        missKeepService.getNotes()
        .then(notes => this.notes = notes)
    }
}