import noteColor from './note-color.js'

export default {
    props:['note'],
    template: `
    <section class="note-edit">
        <button @click="emitEdit(note.id)">edit Text</button>
        <button @click="emitCopy(note.id)">copy</button>
        <button @click="emitRemove(note.id)">delete</button>
        <svg :class="{pinned: note.isPinned}" @click="togglePin" id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m330.274 0-10.607 10.607c-24.914 24.914-28.585 63.132-11.047 91.987l-107.305 72.504-1.856-1.856c-40.939-40.939-107.553-40.94-148.492 0l-10.607 10.606 133.289 133.289-173.649 173.65 21.213 21.213 173.649-173.65 133.29 133.29 10.607-10.607c40.94-40.94 40.939-107.553 0-148.492l-1.856-1.856 72.504-107.305c28.855 17.539 67.073 13.868 91.987-11.047l10.606-10.606zm-3.187 428.148-243.235-243.235c29.104-19.248 68.783-16.069 94.394 9.541l139.3 139.3c25.61 25.611 28.789 65.29 9.541 94.394zm-11.791-139.07-92.374-92.374 105.496-71.281 58.159 58.159zm101.245-117.958-75.66-75.66c-13.828-13.828-16.758-34.491-8.789-51.216l135.665 135.665c-16.725 7.969-37.388 5.039-51.216-8.789z"/></g></svg>
        <note-color :note="note" @update-note="updateNote"/> 
    </section>
    `,
    // data() {
        
    // },
    methods: {
        emitRemove(noteId){
            // console.log('removing', noteId);
            this.$emit('remove-note', noteId);
        },
        updateNote(note) {
            this.$emit('update-note', note)
        },
        emitEdit(noteId){

        },
        togglePin() {
            this.note.isPinned = !this.note.isPinned
            this.updateNote(this.note);
        }
    },
    computed: {
    },
    created() {
    },
    components:{
        noteColor
    }
}