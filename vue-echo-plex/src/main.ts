import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements } from 'echo-plex';
Vue.config.productionTip = false
Vue.config.ignoredElements = ['echo-plex']
defineCustomElements(window)
new Vue({
  render: h => h(App)
}).$mount('#app')
