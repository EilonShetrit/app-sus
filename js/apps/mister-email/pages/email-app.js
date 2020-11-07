
import { demeInfoService } from '../services/deme-info-service.js'
import { appSusService } from '../../../services/util-service.js'

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
    data() {
        return {
            emails: null,
            // dates: {
            //     timeStemp: 1604334597983,
            //     fullDate: new Date("Fri Nov 06 2020 13:55:29 GMT+0200 (Israel Standard Time)")
            // }
        }
    },
    components: {
        emailNav
    },
    created() {
        demeInfoService.createMails().then(mail => this.emails = mail)
        var sents = appSusService.loadFromStorage('sentEmailDB')
        if (!sents || !sents.length) {
            appSusService.saveToStorage('sentEmailDB', [])
        }
     
            // appSusService.saveToStorage('emailsDB', this.emails)
            // this.emails=sendedEmails
        // console.log(this.emails)
        // }else  {
        //     this.emails=sendedEmails
        // }
        // console.log(this.emails)
        

        // 
    },
    methods: {
        
    }

}