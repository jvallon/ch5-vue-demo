import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import './services/webxpanel'

// Crestron libraries
import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
import { bridgeReceiveIntegerFromNative, bridgeReceiveBooleanFromNative, bridgeReceiveStringFromNative, bridgeReceiveObjectFromNative } from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';

window.bridgeReceiveIntegerFromNative = bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = bridgeReceiveObjectFromNative;

Vue.prototype.$CrComLib = CrComLib;
// Vue.prototype.$CrAppender = CrComLib.getRemoteAppender('192.168.1.13', '8980')
// Vue.prototype.$CrLogger = CrComLib.getLogger(Vue.prototype.$CrAppender, true) // this intercepts console.log()

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
  render: h => h(App),
}).$mount('#app')
