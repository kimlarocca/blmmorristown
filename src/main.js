import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import Default from './layouts/Default'
import StoryblokVue from 'storyblok-vue'

import './assets/scss/main.scss'

Vue.use(VueMeta)
Vue.use(StoryblokVue)

Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created: function () {
      this.$storyblok.init({
      accessToken: 'KlFg08TYitlAVnY2vfAalwtt'
      })
    }
  }).$mount('#app')
