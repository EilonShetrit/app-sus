export default {
    template: `
    <section class="email-compose">
        <form @keyup.enter="sends">
            <h1>new email</h1>
            <div><span>send to: </span> <label><textarea v-model="newEmail.to" name="compose-to" cols="90%" rows="1" class="compose-email" ></textarea></label></div>
            <div><span>subject: </span> <label><textarea v-model="newEmail.subject" name="compose-subject" cols="90%" rows="1" class="compose-subject"></textarea></label></div>
            <div><label><textarea v-model="newEmail.body" name="compose-body" cols="100%" rows="20"></textarea></label></div>
            <div class="flex space-between">
                <button class="compose-btn" @click="sendingEmail" >Send</button>
                <span class="compose-btn trash" @click="deletingEmail"> <i class="fas fa-trash"></i> </span>
            </div>
        </form>
        {{newEmail}}
    </section>
    `,
    data(){
        return {
            newEmail:{
                to:'',
                subject :'',
                body:'',
                sentAt:'' //(new Date().toLocaleDateString())
            }
        }
    },
    methods: {
        sends(){
            console.log('bla bka')
        },
        sendingEmail() {
            this.newEmail.sentAt=(new Date().toLocaleDateString())
            console.log(this.newEmail.sentAt)
            console.log('sendingg')
        },
        deletingEmail(){
            this.newEmail.to=''
            this.newEmail.subject=''
            this.newEmail.body=''
            this.newEmail.sentAt=''
            
            console.log('deleting')
        }
    }
}