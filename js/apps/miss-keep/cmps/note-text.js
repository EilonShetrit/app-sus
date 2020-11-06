import noteEdit from './note-edit.js'

export default {
    props:['note'],
    template: `
        <section class="note-text">
            <h2>{{title}}</h2>
            <h1>{{txt}}</h1>
            <note-edit @remove-note="removeNote" @update-note="updateNote" :note="note"/>
        </section>
    `,
    data(){
        return{
            txt: this.note.info.txt,
            title: this.note.info.title,
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