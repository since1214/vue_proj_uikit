import Vue from 'vue'
import App from './App.vue'
import router from './router'

import UIkit from './uikit'

Vue.config.productionTip = false
Vue.use(UIkit)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
