import noteEdit from './note-edit.js'

export default {
    props:['note'],
    template: `
        <section class="note-video">
            <h2>{{title}}</h2>
            <section class="video-play">
                <embed :src="url"/>
                <!-- <iframe :src="url"></iframe> -->
            </section>
            <note-edit @remove-note="removeNote" @update-note="updateNote" :note="note"/>
        </section>
    `,
    data(){
        return{
            title: this.note.info.title,
            url: this.note.info.txt,
        }
    },
    methods: {
        removeNote(noteId) {
            this.$emit('remove-note', noteId)
        },
        updateNote(note) {
            this.$emit('update-note', note)
        }
    },
    created(){

    },
    components:{
        noteEdit
    }
}
