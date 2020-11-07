import {appSusService} from '../../../services/util-service.js'
export default {
    template: `
    <section class="email-compose">
        
            <h1>new email</h1>
            <div class="new-mail-content">
                <div><span>send to: </span> <input v-model="newEmail.to" name="compose-to" class="compose-email"/> </div>
                <hr>
                <div><span>subject: </span><input v-model="newEmail.subject" name="compose-subject"  class="compose-subject"/></div>
                <hr>
                <div><label> <textarea v-model="newEmail.body" name="compose-body" class="compose-body"/></textarea></label></div>
                <hr>
                <div class="flex space-between">
                    <button class="compose-btn" @click="sendingEmail" >Send</button>
                    <span class="compose-btn trash" @click="deletingEmail"> <i class="fas fa-trash"></i> </span>
                </div>
            </div>
       
    </section>
    `,
    data(){
        return {
            newEmail:{
                id :null,
                to:'',
                subject :'',
                body:'',
                isStar:false,
                sentAt: {
                    timeStemp: '',
                    fullDate: ''

                } //(new Date().toLocaleDateString())
            }
        }
    },
    methods: {
       
        sendingEmail() {
            this.newEmail.id=appSusService.makeId()
            this.newEmail.sentAt={
                timeStemp:Date.now(),
                fullDate:new Date()
            }
            var sents= appSusService.loadFromStorage('sentEmailDB')
            sents.unshift(this.newEmail)
            appSusService.saveToStorage('sentEmailDB',sents)
            this.$router.push('/email/sent')

        },
        deletingEmail(){
            this.newEmail.to=''
            this.newEmail.subject=''
            this.newEmail.body=''
            this.newEmail.sentAt=''
            
            console.log('deleting')
        }
    },
    created() {
        // appSusService.saveToStorage('sentEmailDB',this.newEmail)

    }
    
    // saveToStorage,
    // loadFromStorage
}