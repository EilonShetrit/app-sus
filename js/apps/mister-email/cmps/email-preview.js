export default {
    props:['email'],
    template: `
        <section>
            <tr>
                <td> {{sendFrom}} </td>
                <td> {{subjectOfEmail}} - {{bodyOfEmail}} </td>
                <td> {{sentAt}} </td>
            </tr>
        </section>
    `,
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
            return this.email.sentAt.toLocaleDateString()

        }
    }
        
    
}