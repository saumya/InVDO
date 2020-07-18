// Router
//

import Vue from 'vue'
import Router from 'vue-router'

import Home1Comp from '../components/Home1.comp'
import WelcomeComp from '../components/Welcome.comp'
import VueHelpComp from '../components/HelloWorld'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home1Comp,
            props: true
        },
        { path: '/check', component: WelcomeComp },
        { path: '/vue', component: VueHelpComp }
    ]
})