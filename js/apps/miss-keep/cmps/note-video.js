export default {
    props:['note'],
    template: `
        <section class="note-video">
            <section class="video-play">
                <embed :src="url"/>
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