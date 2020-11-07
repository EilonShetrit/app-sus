
export default {
    template: `
    <header class="app-header ">
        <nav class="nav container flex space-between align-center ">
             <router-link to="/" exact> 
                 <div class="logo flex justify-start align-center">
                     <img :src="'./assets/img/horse-logo.png'" /> 
                    <span >Appsus</span>
                 </div>
            </router-link>
            <div class="links flex">
                <router-link  class="route-links flex align-center justify-center" to="/" exact>Home</router-link>
                <router-link  class="route-links flex align-center justify-center" to="/books" exact>Books</router-link>
                <router-link  class="route-links flex align-center justify-center" to="/email/inbox" exact>Email</router-link>
                <router-link  class="route-links flex align-center justify-center" to="/notes">Notes</router-link>
                <router-link  class="route-links flex align-center justify-center" to="/about">About Us</router-link>
            </div>
        </nav>        
    </header>
    `,
    data() {
        return {
            // bgc1: null
        }

    },
    methods: {
       
    }
} 