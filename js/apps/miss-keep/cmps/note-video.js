import noteEdit from './note-edit.js'

export default {
    props: ['note'],
    template: `
        <section :title="direction" class="note-video">
        <h2  class="img-title" contenteditable v-text="title"></h2> 
            <section class="video-play">
                <iframe :src="fixedUrl"></iframe>
            </section>
            <note-edit @remove-note="removeNote" @update-note="updateNote" @copy-note="copyNote" :note="note"/>
        </section>
    `,
    data() {
        return {
            title: this.note.info.title,
            url: this.note.info.txt,
            direction: 'click on Youtube button to watch on new tab'
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
        }
    },
    computed: {
        fixedUrl() {
            return this.url.replace("watch?v=", "embed/");
        }
    },
    created() {

    },
    components: {
        noteEdit
    }
}
