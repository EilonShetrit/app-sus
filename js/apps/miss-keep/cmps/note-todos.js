import noteEdit from './note-edit.js'

export default {
    props:['note'],
    template: `
        <section class="note-todos">
            <h2>{{title}}</h2>
            <ul>
                <li v-for="todo in todos">
                    {{todo.txt}}
                </li>
            </ul>
            <note-edit @remove-note="removeNote" @update-note="updateNote" :note="note"/>
        </section>
    `,
    data(){
        return{
            title: this.note.info.title,
            todos: this.note.info.todos,
        }
    },
    methods: {
        removeNote(noteId) {
            this.$emit('remove-note', noteId)
        },
        updateNote(note) {
            this.$emit('update-note', note)
        }
    },
    created(){

    },
    components:{
        noteEdit
    }
}