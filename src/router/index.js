// Router
//

import Vue from 'vue'
import Router from 'vue-router'

import Home1Comp from '../components/Home1.comp'
import WelcomeComp from '../components/Welcome.comp'
import VueHelpComp from '../components/HelloWorld'

import TrendingComp from '../components/Trending.comp'
import PopularComp from '../components/Popular.comp'
import AboutComp from '../components/About.comp'


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
        { path: '/vue', component: VueHelpComp },
        
        { path: '/popular', component: PopularComp },
        { path: '/trending', component: TrendingComp },
        { path: '/about', component: AboutComp }
    ]
})