import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false
Vue.component('Paginate', Paginate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
