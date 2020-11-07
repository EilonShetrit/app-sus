import {appSusService} from '../../../services/util-service.js'
import emailPreview from './email-preview.js' 
import emailSort from './email-sort.js' 
// import emailDetails from './email-details.js'
export default {
    props:['emails'],
    template: `
        <section> 
            <section class="sorted-area">
                <select  v-model="filterBy" @change="onChangeFilter">
                    <option disabled value="">Please select filter</option>
                    <option>All</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select>
                <email-sort :emails="emailsToShow" @doSort="setSort" />
            </section>
            <table v-show="emailsToShow" class="table-emails" >
                <tr v-for="email in emailsToShow" :key="email.id">
                    <email-preview :email="email" > </email-preview>
                   
                </tr>
            </table> 
        </section>
    `,data(){
       return {
        filterBy:'',
        copyEmails:null,
        emailsToShow:null,
        
           
       }
    },
    
    methods:{
        onChangeFilter(){ 
            if (this.filterBy==='Read')  {
                this.emailsToShow = this.copyEmails.filter(email=>email.isRead===true)
                return this.emailsToShow
            }
            else if (this.filterBy==='Unread') {
                this.emailsToShow= this.copyEmails.filter(email=>email.isRead===false)
                return this.emailsToShow

            }
            else if (!this.filterBy || this.filterBy==='All') {
                this.emailsToShow=this.copyEmails
                return this.emailsToShow
            }
        },
        setSort(sortBy){
            if (!sortBy || sortBy==='Date') {
                this.emailsToShow.sort(function(email1, email2) {
                    return  email2.sentAt.timeStemp-email1.sentAt.timeStemp;
                });
            }else if (sortBy==='Title') {
                this.emailsToShow.sort(function(email1,email2) {
                    if (email1.subject>email2.subject)
                    return 1;
                  if (email1.subject < email2.subject)
                    return -1;
                  return 0;
                });
                console.log(this.emailsToShow)
                
                
            }

            
        }
    },
    
    
    components:{
        emailPreview,
        emailSort
       
    },
    created(){
        this.copyEmails= appSusService.loadFromStorage('emailsDB')
        this.emailsToShow= JSON.parse(JSON.stringify(this.copyEmails))
    }
}
    