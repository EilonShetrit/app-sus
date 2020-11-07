import {appSusService} from '../../../services/util-service.js'
export default {
    template: `
    <section class="email-compose">
        <section >
            <h1>new email</h1>
            <div><span>send to: </span> <label><textarea v-model="newEmail.to" name="compose-to" cols="85%" rows="1" class="compose-email" ></textarea></label></div>
            <div><span>subject: </span> <label><textarea v-model="newEmail.subject" name="compose-subject" cols="85%" rows="1" class="compose-subject"></textarea></label></div>
            <div><label><textarea v-model="newEmail.body" name="compose-body" cols="95%" rows="20"></textarea></label></div>
            <div class="flex space-between">
                <button class="compose-btn" @click="sendingEmail" >Send</button>
                <span class="compose-btn trash" @click="deletingEmail"> <i class="fas fa-trash"></i> </span>
            </div>
        </section>
        {{newEmail}}
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