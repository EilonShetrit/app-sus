import missBooks from './apps/miss-book/miss-book.js'
import  emailApp from './apps/mister-email/pages/email-app.js'
import missKeep from './apps/miss-keep/pages/miss-keep.js'
import aboutUs from './pages/about.js'
import homePage from './pages/home-page.js'
import emailList from './apps/mister-email/cmps/email-list.js'
import emailCompose from './apps/mister-email/cmps/email-compose.js'
import emailSentList from './apps/mister-email/cmps/email-sent-list.js'

// import emailDetails from './apps/mister-email/cmps/email-details.js'
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
            },
            {
                path :'compose',
                component:emailCompose
                
            },
            {
                path :'sent',
                component:emailSentList
                
            }
            // {
            //     path: 'details',
            //     component: emailDetails
            // }

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