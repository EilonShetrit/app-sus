import emailPreview from './email-preview.js' 
// import emailDetails from './email-details.js'
export default {
    props:['emails'],
    template: `
        <section>
            <table v-show="emails" >
                <tr v-for="email in emails" :key="email.id">
                    <email-preview :email="email" > </email-preview>
                    <!-- <email-details v-if="clicked"></email-details> -->
                </tr>
            </table> 
           
        </section>
    `,data(){
       return {
           
       }
    },
    computed:{
        // clicked(){
        //     return true
        // }
    },
    
    components:{
        emailPreview
        // emailDetails
    }

}
    