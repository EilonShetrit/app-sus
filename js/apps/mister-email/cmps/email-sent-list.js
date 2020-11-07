import {appSusService} from '../../../services/util-service.js'
// import emailSentPreview from './email-sent-preview.js'
import emailPreview from './email-preview.js'
export default {
    template: `
        <section>
        
            <table v-show="sentsEmails" >
                <tr v-for="email in sentsEmails" :key="email.id">
                      
                      <email-preview :email="email"/>
                </tr>
            </table> 
           
        </section>
    `,data(){
        return {
            sentsEmails:null

        }
    },
     components:{
        emailPreview
        // emailSentPreview
        
    },
    created() {
       this.sentsEmails= appSusService.loadFromStorage('sentEmailDB')
    }
}