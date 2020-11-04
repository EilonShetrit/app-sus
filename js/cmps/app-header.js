
export default {
    template: `
    <header class="app-header">
        <nav class="nav flex space-between">
            <div class="logo">
                <img :src="'./assets/img/horse-logo.png'" />
            </div>
            <div class="links">
                <router-link to="/" exact>Home</router-link>|
                <router-link to="/books" exact>Books</router-link>|
                <router-link to="/emil" exact>Email</router-link>|
                <router-link to="/keep">Notes</router-link>
                <router-link to="/about">About Us</router-link>
            </div>
        </nav>        
    </header>
    `
}