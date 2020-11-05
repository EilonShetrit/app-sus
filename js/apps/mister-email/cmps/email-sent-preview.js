

export default {
    // props:['email'],
    template: `
        <section>
        <h1> haaaaa</h1>
            <!-- <section @click="read" v-show="!isDetailsShown">
                    <td :class="{unread: !isRead}"> {{sendFrom}} </td>
                    <td :class="{unread: !isRead}"> {{subjectOfEmail}} - {{bodyOfEmail}} </td>
                    <td :class="{unread: !isRead}"> {{sentAt}} </td>
            </section>
            <section  v-show="isDetailsShown">
                <email-details @click.native="read" :email="emailCopy"/>
            </section> -->
        </section>
    `,data(){
        return {
            // emailCopy: null
        }
    }
}