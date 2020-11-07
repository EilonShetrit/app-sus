import noteEdit from './note-edit.js'

export default {
    props:['note'],
    template: `
        <section class="note-todos">
        <h2  class="img-title" contenteditable v-text="title" @blur="updateTitle"></h2>
            <ul>
                <li v-for="(todo,idx) in todos">
                <span  class="img-title" contenteditable v-text="todo.txt"></span>
                <!-- <span  class="img-title" contenteditable v-text="todo.txt" hidden></span> -->
                </li>
            </ul>
            <section class="note-edit">
                <note-edit @remove-note="removeNote" @update-note="updateNote"  @copy-note="copyNote" :note="note"/>
                <!-- <button>Add+</button> -->
            </section>
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
        },
        copyNote(note){
            this.$emit('copy-note', note) 
        },
        updateTitle(ev) {
            this.note.info.title = ev.target.innerText
            this.updateNote(this.note)
        }
        // togglePin() {
        //     this.note.isPinned = !this.note.isPinned
        //     this.updateNote(this.note);
        // }
    },
    created(){

    },
    components:{
        noteEdit
    }
}