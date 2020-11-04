import emailPreview from './email-preview.js' 

export default {
    props:['emails'],
    template: `
        <section>
            <ul v-show="emails" >
                <li v-for="email in emails" :key="email.id">
                    <email-preview :email="email" > </email-preview>
                </li>
            </ul>   
        </section>
    `,
    components:{
        emailPreview
    }

}
    