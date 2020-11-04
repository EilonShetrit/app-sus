import missBooks from './apps/miss-book/miss-book.js'
import  emailApp from './apps/mister-email/pages/email-app.js'
import missKeep from './apps/miss-keep/pages/miss-keep.js'
import aboutUs from './pages/about.js'
import homePage from './pages/home-page.js'
import emailList from './apps/mister-email/cmps/email-list.js'
// import emailApp from './apps/mister-email/cmps/email-app.js'
const appRouters = [
    {
        path: '/books',
        component: missBooks
    },
    {
        path: '/email',
        component:  emailApp,
        children : [
            {
                path :'inbox',
                component:emailList
            }

        ]

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