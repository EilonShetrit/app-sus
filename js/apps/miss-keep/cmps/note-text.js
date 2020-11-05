

export default {
    props:['note'],
    template: `
        <section class="note-text">
            <h2>{{txt}}</h2>
            <input type="color" v-model="backgroundColor">
        </section>
    `,
    data(){
        return{
            txt: this.note.info.txt,
            backgroundColor: "#ffffff"

        }
    },
    methods: {
     
    },
    created(){

    }
}