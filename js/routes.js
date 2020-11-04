import missBooks from './apps/miss-book/miss-book.js'
import misterEmail from './apps/mister-email/pages/mister-email.js'
import missKeep from './apps/miss-keep/pages/miss-keep.js'
import aboutUs from './pages/about.js'
import homePage from './pages/home-page.js'

const appRouters = [
    {
        path: '/books',
        component: missBooks
    },
    {
        path: '/email',
        component: misterEmail,
        // children:[
        //     {}
        // ]
    },
    {
        path: '/keep',
        component: missKeep
    },
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/',
        component: homePage
    }
] 

export const appRouter = new VueRouter({routes:appRouters})