import emailSentPreview from './email-sent-preview.js'

export default {
    // props:['emails'],
    template: `
        <section>
            <h1> hiii</h1>
            <email-sent-preview/>
            <!-- <table v-show="emails" > -->
                <!-- <tr v-for="email in emails" :key="email.id"> -->
                    <!-- <email-preview :email="email" > </email-preview> -->
                    <!-- <email-details v-if="clicked"></email-details> -->
                <!-- </tr> -->
            <!-- </table>  -->
           
        </section>
    `,
     components:{
        emailSentPreview
        
    }
}