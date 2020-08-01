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

// Getting the Global varibles into Vue App
// Ref: https://stackoverflow.com/questions/54166847/how-to-access-the-window-object-in-vue-js
Vue.prototype.Hls = window.Hls;
//
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: (h) => h(AppContainer)
})
