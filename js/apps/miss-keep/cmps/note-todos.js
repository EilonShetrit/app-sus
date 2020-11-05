
export default {
    props:['note'],
    template: `
        <section class="note-todos">
            <ul>
                <li v-for="todo in todos">
                    {{todo.txt}}
                </li>
            </ul>

            <input type="color" v-model="backgroundColor">
        </section>
    `,
    data(){
        return{
            todos: this.note.info.todos,
            backgroundColor: "#ffffff"

        }
    },
    methods: {
     
    },
    created(){

    }
}