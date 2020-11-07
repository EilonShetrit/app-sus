import noteEdit from './note-edit.js'

export default {
    props:['note'],
    template: `
        <section class="note-img">
            <h2  class="img-title" contenteditable v-text="title"></h2> 
            <img :src="url">
            <note-edit @remove-note="removeNote" @update-note="updateNote"  @copy-note="copyNote" :note="note"/>
        </section>
    `,
    data(){
        return{
            url: this.note.info.txt,
            title: this.note.info.title,
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
    created(){

    },
    components:{
        noteEdit
    }
}