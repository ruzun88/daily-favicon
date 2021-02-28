import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import FaviconChanger from './components/FaviconChanger.vue'

Vue.config.productionTip = false

Vue.component('FaviconChanger',FaviconChanger)

// Vue.use(FaviconChangerPlugin);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
