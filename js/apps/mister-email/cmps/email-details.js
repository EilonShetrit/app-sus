export default {
    props:['email'],
    template: ` 
        <section class="email-details">
           <div class="detail-header flex space-between          align-center">
                <h3 class="detail-from">{{email.subject}}</h3>
                <button class="detail-btn" @click="deletingEmail"><i class="fas fa-trash"></i></button>
           </div>
           <div class="detail-sender flex justify-start">
           <p class="detail-sender-name"> {{sendFrom}} </p>
           <p>  {{email.email}} </p>
           <p> {{email.sentAt}} </p>
           </div>
           <p> {{email.body}} </p>
        </section>
    
    
    `,
    data(){
        return {
            // mail:this.email
        }
    },
    created(){
        // console.log(this.email)
    },
    methods:{
        deletingEmail(){
            console.log('deleting')
            //מחיקת אימייל
        }
    },
    computed: {
        sendFrom(){
            if (!this.email.from) return this.email.to
            else return this.email.from
        }
     
    }

}