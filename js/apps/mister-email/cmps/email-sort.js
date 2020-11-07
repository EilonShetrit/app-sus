

export default {
    props:['emails'],
    template: `
        <section>
            <select  v-model="sortBy" @change="emitSort">
                    <option disabled value="">Please select sort</option>
                    <option>Date</option>
                    <option>Title</option>
                </select>
        </section>
    `,
    data(){
        return {
            sortedEmails: null,
            sortBy :''
        }
    },
    methods: {
        emitSort() {
           
            this.$emit('doSort', this.sortBy);
        }

    },
    created(){
        this.sortedEmails=this.emails
    }
}