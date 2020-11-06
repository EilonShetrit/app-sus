import emailDetails from './email-details.js'
export default {
    props:['email'],
    template: `
        <section>
            <section @click="read" v-show="!isDetailsShown">
                    <td :class="{unread: !isRead}"> {{sendFrom}} </td>
                    <td :class="{unread: !isRead}"> {{subjectOfEmail}} - {{bodyOfEmail}} </td>
                    <td :class="{unread: !isRead}"> {{sentAt}} </td>
            </section>
            <section  v-show="isDetailsShown">
                <email-details @click.native="read" :email="emailCopy"/>
            </section>
        </section>
    `,data(){
        return {
            emailCopy: null,
            isRead:this.isReaded,
            isDetailsShown: false
          }
    },
    methods:{
        read(){
           this.isRead=true
           this.emailCopy.isRead=true
           this.isDetailsShown=!this.isDetailsShown
        //    this.$router.push('/email/inbox/details')
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
           
            return this.email.sentAt
        },
      
        isReaded(){
            return this.emailCopy.isRead
        }
    },
    created(){
        this.emailCopy=JSON.parse(JSON.stringify(this.email))
        
    },
    components:{
        emailDetails
    }
    
        
    
}