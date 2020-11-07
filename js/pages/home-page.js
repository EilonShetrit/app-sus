export default {
    template: `
    <section class="home-page">
        <!-- <h1>Welcome to Appsus</h1>    -->
        <section class="home-page-btn flex space-around container">
            <router-link to="/email/inbox" exact><button class="btn-email">Email</button></router-link>
            <router-link to="/notes" exact><button class="btn-email">Notes</button></router-link>
            <router-link to="/books" exact><button class="btn-email">Books</button></router-link>
        </section>
        
    </section>
    `
}