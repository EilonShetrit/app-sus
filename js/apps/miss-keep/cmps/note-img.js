
export default {
    props:['note'],
    template: `
        <section class="note-img">
            <img :src="url">
            <input type="color" v-model="backgroundColor">
        </section>
    `,
    data(){
        return{
            url: this.note.info.txt,
            backgroundColor: "#ffffff"

        }
    },
    methods: {
     
    },
    created(){

    }
}