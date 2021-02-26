import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
// import FaviconChangerPlugin from './plugins/FaviconChangerPlugin'

Vue.config.productionTip = false

// Vue.use(FaviconChangerPlugin);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
