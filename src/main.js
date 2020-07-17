import Vue from 'vue'
//import App from './App.vue'
import AppContainer from './components/App.container'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppContainer),
}).$mount('#app')
