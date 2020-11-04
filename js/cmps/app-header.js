
export default {
    template: `
    <header class="app-header ">
        <nav class="nav flex space-between align-center ">
            <div class="logo flex justify-start">
                <img :src="'./assets/img/horse-logo.png'" />
            </div>
            <div class="links flex justify-start ">
                <router-link class="route-links" to="/" exact>Home</router-link>
                <router-link class="route-links" to="/books" exact>Books</router-link>
                <router-link class="route-links" to="/emil" exact>Email</router-link>
                <router-link class="route-links" to="/keep">Notes</router-link>
                <router-link class="route-links" to="/about">About Us</router-link>
            </div>
        </nav>        
    </header>
    `
}