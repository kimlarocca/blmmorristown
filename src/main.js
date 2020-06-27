import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import Default from './layouts/Default'

import './assets/scss/main.scss'

Vue.use(VueMeta)

Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
