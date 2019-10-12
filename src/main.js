import Vue from 'vue'
import VueTippy from 'vue-tippy'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

Vue.use(VueTippy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
