


export default {
    template: `
    <section>
        <nav  class="email-nav flex">
            <router-link to="/email/inbox" exact>inbox</router-link>
            <router-link to="/email/inbox">Starred</router-link>
            <router-link to="/email/inbox">Sent email</router-link>
            <!-- <router-link >Drafts</router-link> -->
        </nav>        
    </section>
    `,
    // components: {
    //     userMsg,
    // }
}