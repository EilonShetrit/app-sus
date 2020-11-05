
import {demeInfoService} from '../services/deme-info-service.js'
import {appSusService} from '../../../services/util-service.js'

import emailNav from '../cmps/email-nav.js'


export default {
    template: `
    <section class="main-mister-email flex">
        <!-- <h1>mister email..</h1>  -->
        <section>
            <email-nav />
        </section> 
        <router-view :emails="emails"></router-view>
    </section>
    `, 
    data(){
        return {
            emails: null
        }
    },
    components: {
        emailNav
    },
    created() {
       var sents= appSusService.loadFromStorage('sentEmailDB')
       if (!sents){
        appSusService.saveToStorage('sentEmailDB',[])
       }
        demeInfoService.createMails()
        .then(mail=>this.emails=mail)

        
    }

}