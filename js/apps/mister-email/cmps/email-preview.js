import { appSusService } from '../../../services/util-service.js'
import { demeInfoService } from '../services/deme-info-service.js'
// import { usefulService } from '../services/useful-func-service.js'
import { eventBus, EVENT_SHOW_MSG }  from '../../../services/event-bus-service.js'

import {timeToShow} from '../services/time-to-shoe-service.js'
import emailDetails from './email-details.js'
export default {
    props:['email'],
    template: `
        <section>
            <section  @click="read(email.id)" v-show="!isDetailsShown">
                    <td class="td1" :class="{unread: !emailCopy.isRead}"> {{sendFrom}} 
                        <span @click.stop="changeUsStar"> 
                            <i v-show="!isStared" class="far fa-star"></i> 
                            <i v-show="isStared" class="fas fa-star"></i>
                        </span>
                    </td>
                    <td class="td2" :class="{unread: !emailCopy.isRead}"> {{subjectOfEmail}} - {{bodyOfEmail}} </td>
                    <td class="td3" :class="{unread: !emailCopy.isRead}"> {{sentAt}} </td>
            </section>
            <section  v-show="isDetailsShown">
                <email-details @click.native="read" :email="emailCopy"/>
            </section>
        </section>
    `,data(){
        return {
            isStared:null,
            emailCopy: null,
            // isRead:this.isReaded,
            isDetailsShown: false
          }
    },
    methods:{
        read(emailId){
           demeInfoService.getIdxEmailById(emailId)
           .then(emailIdx=> {
               if (emailIdx===-1) return;
               var emails= appSusService.loadFromStorage('emailsDB')
                //    console.log(emails)
                if (emails[emailIdx].isRead===true) return
                   emails[emailIdx].isRead=true
                   this.emailCopy=emails[emailIdx]
                   appSusService.saveToStorage('emailsDB',emails)
                   eventBus.$emit('changedUnReadEmails',-1);
            })
           this.isDetailsShown=!this.isDetailsShown
        },
        changeUsStar(){
            this.isStared=!this.isStared
        }
    },
    computed: {
        sendFrom(){
            if (!this.email.from) return this.email.to
            else return this.email.from
        },
        subjectOfEmail(){
            return this.email.subject
        },
        bodyOfEmail(){
            return this.email.body
        },
        sentAt(){
            return timeToShow.fullDate(this.email.sentAt)
        },
        // isReaded(){
        //     // return this.emailCopy.isRead
        // }
    },
    created(){
        this.emailCopy=JSON.parse(JSON.stringify(this.email))
    },
    components:{
        emailDetails
    }
    
        
    
}