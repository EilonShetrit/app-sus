import noteEdit from './note-edit.js'

export default {
    props:['note'],
    template: `
        <section class="note-text" :style="{backgroundColor: note.style.backgroundColor}">
        <h2  class="img-title" contenteditable v-text="title" @blur="updateTitle"></h2> 
        <h3  class="img-title" contenteditable v-text="txt" @blur="updateText"></h3> 
            <note-edit @remove-note="removeNote" @update-note="updateNote" @copy-note="copyNote" :note="note"/>
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
        },
        copyNote(note){
            this.$emit('copy-note', note) 
        },
        updateTitle(ev) {
            this.note.info.title = ev.target.innerText
            this.updateNote(this.note)
        },
        updateText(ev){
            this.note.info.txt = ev.target.innerText
            this.updateNote(this.note)
        }
    },
    created(){

    },
    components:{
        noteEdit
    }
}