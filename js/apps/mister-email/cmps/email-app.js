
import {demeInfoService} from '../services/deme-info-service.js'
// import {utilService} from '../../../services/util-service.js'

export default {
    template: `
    <section>
        <h1>emailApp</h1> 
        <ul >
                <li v-for="email in emails" :key="email.id" >
                    <book-list />

                </li>
        </ul>   
    </section>
    `,
    data(){
        return {
            emails: demeInfoService.createMails()
                    .then(mail=>console.log(mail))
        }

    },
    components:{
        carList
    }
}