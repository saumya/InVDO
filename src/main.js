import Vue from 'vue'
//import App from './App.vue'
import AppContainer from './components/App.container'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/*
new Vue({
  render: h => h(AppContainer),
}).$mount('#app')
*/

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: (h) => h(AppContainer)
})
