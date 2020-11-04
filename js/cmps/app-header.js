
export default {
    template: `
    <header class="app-header ">
        <nav class="nav container flex space-between align-center ">
            <div class="logo flex justify-start">
                <img :src="'./assets/img/horse-logo.png'" />
            </div>
            <div class="links flex">
                <router-link class="route-links flex align-center justify-center" to="/" exact>Home</router-link>
                <router-link class="route-links flex align-center justify-center" to="/books" exact>Books</router-link>
                <router-link class="route-links flex align-center justify-center" to="/email" exact>Email</router-link>
                <router-link class="route-links flex align-center justify-center" to="/keep">Notes</router-link>
                <router-link class="route-links flex align-center justify-center" to="/about">About Us</router-link>
            </div>
        </nav>        
    </header>
    `
} 