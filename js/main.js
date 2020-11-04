// import appHeader from ''
import { appRouter } from './routes.js'
import appHeader from './cmps/app-header.js'

const options = {
    el: '#app',
    router: appRouter,
    template: `
        <section>
            <app-header/>
            <main  class="container">
         <router-view></router-view>
            </main>
        </section>
`, components: {
        appHeader
    }
}

const app = new Vue(options)
