import noteEdit from './note-edit.js'
export default {
    props: ['note'],
    template: `
        <section class="note-todos" :style="{backgroundColor: note.style.backgroundColor}">
        <h2  class="img-title" contenteditable v-text="title" @blur="updateTitle"></h2>
            <ul>
                <li v-for="(todo,idx) in todos">
                <span  class="img-title" contenteditable v-text="todo.txt" @blur="updateTodo($event , idx)"></span>
                <span v-if="todo.doneAt" @click="toggleDoneTodo(todo)"><span class="done-at">Done at:</span> {{todo.doneAt}}</span>
                <svg :class="{done:todo.doneAt}" @click="toggleDoneTodo(todo)" width="24" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
                <!-- <span  class="img-title" contenteditable v-text="todo.txt" hidden></span> -->
                </li>
            </ul>
            <section class="note-edit">
                <note-edit @remove-note="removeNote" @update-note="updateNote"  @copy-note="copyNote" :note="note"/>
                <!-- <button>Add+</button> -->
            </section>
        </section>
    `,
    data() {
        return {
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
        copyNote(note) {
            this.$emit('copy-note', note)
        },
        updateTitle(ev) {
            this.note.info.title = ev.target.innerText
            this.updateNote(this.note)
        },
        updateTodo(ev, idx) {
            this.note.info.todos[idx].txt = ev.target.innerText
            this.updateNote(this.note)
        },
        toggleDoneTodo(todo) {
            todo.doneAt = !todo.doneAt ? new Date().toString().split(' ')[4] : null;
            this.updateNote(this.note);
        }
    },
    computed: {
    },
    components: {
        noteEdit
    }
}