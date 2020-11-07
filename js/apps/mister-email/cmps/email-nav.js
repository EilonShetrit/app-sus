import { appSusService } from '../../../services/util-service.js'
import { eventBus } from '../../../services/event-bus-service.js'



export default {
    template: `
    <section>
        <nav  class="email-nav flex">
            <button class="compose-btn" ><router-link to="/email/compose" exact><i class="fas fa-plus"></i> compose</router-link></button>
            <router-link to="/email/inbox" exact>inbox <span v-if="unReadEmails">  ({{unReadEmails}}) </span> </router-link>
            <router-link to="/email/inbox">Starred</router-link>
            <router-link to="/email/sent">Sent email</router-link>
            <!-- <router-link to="/email/drafts">Drafts</router-link> -->
            <!-- <router-link >Drafts</router-link> -->
        </nav>        
    </section>
    `,
    data(){
        return {
            unReadEmails :0
       }
    },
    computed: {
        
    },
    created(){
        var emails= appSusService.loadFromStorage('emailsDB')
        emails.forEach(email=>{
            if (!email.isRead) {
                this.unReadEmails++
            }
        }) 
        eventBus.$on('changedUnReadEmails',msg=> this.unReadEmails+=msg);
    }
    // components: {
    //     userMsg,
    // }
}