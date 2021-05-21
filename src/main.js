import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

// Crestron libraries
import Ch5 from './plugins/ch5'
// import './plugins/webxpanel'
Vue.prototype.$CrComLib = Ch5;
// // Vue.prototype.$CrAppender = Ch5.getRemoteAppender('192.168.1.13', '8980')
// // Vue.prototype.$CrLogger = Ch5.getLogger(Vue.prototype.$CrAppender, true) // this intercepts console.log()

import * as Crestron from  './api/ch5-wrapper'
Vue.prototype.$api = Crestron

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue configs
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
