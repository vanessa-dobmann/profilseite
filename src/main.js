import Vue from 'vue'
import App from './App.vue'
import router from './router'

// eslint-disable-next-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
