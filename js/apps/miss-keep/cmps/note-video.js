export default {
    props:['note'],
    template: `
        <section class="note-video">
            <section class="video-play">
                <iframe src="url"></iframe>
            </section>
            <input type="color" v-model="backgroundColor" >
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
// :backgroundColor="backgroundColor"