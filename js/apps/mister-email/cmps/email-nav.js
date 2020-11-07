import { appSusService } from '../../../services/util-service.js'
import { eventBus } from '../../../services/event-bus-service.js'



export default {
    template: `

        <nav  class="email-nav flex-c space-around">
            <section class="compose-btn-bgc">
                 <button class="compose-btn btn" ><router-link to="/email/compose" exact><i class="fas fa-plus"></i> compose</router-link></button>
            </section>
            <router-link class="nav-link" to="/email/inbox" exact>inbox <span v-if="unReadEmails">  ({{unReadEmails}}) </span> </router-link>
            <router-link to="/email/inbox" class="nav-link">Starred</router-link>
            <router-link to="/email/sent" class="nav-link">Sent email</router-link>
            <!-- <router-link to="/email/drafts">Drafts</router-link> -->
            <!-- <router-link >Drafts</router-link> -->
        </nav>        

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