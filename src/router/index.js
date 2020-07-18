// Router
//

import Vue from 'vue'
import Router from 'vue-router'

import WelcomeComp from '../components/Welcome.comp'
import VueHelpComp from '../components/HelloWorld'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: WelcomeComp,
            props: true
        },
        { path: '/vue', component: VueHelpComp}
    ]
})