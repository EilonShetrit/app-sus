
export default {
    props:['email'],
    template: `
        <section @click="read" >
                <td :class="{unread: !isRead}"> {{sendFrom}} </td>
                <td :class="{unread: !isRead}"> {{subjectOfEmail}} - {{bodyOfEmail}} </td>
                <td :class="{unread: !isRead}"> {{sentAt}} </td>
        </section>
    `,data(){
        return {
            emailCopy: null,
            isRead:this.isReaded,
          }
    },
    methods:{
        read(){
           this.isRead=true
           this.emailCopy.isRead=true
        //    this.$router.push('/email/inbox/details')
        }
    },
    computed: {
        sendFrom(){
            return this.email.from
        },
        subjectOfEmail(){
            return this.email.subject
        },
        bodyOfEmail(){
            return this.email.body
        },
        sentAt(){
            var date=this.email.sentAt.toLocaleDateString()
            return date
        },
      
        isReaded(){
            return this.emailCopy.isRead
        }
    },
    created(){
        this.emailCopy=JSON.parse(JSON.stringify(this.email))
        
    },
    
        
    
}