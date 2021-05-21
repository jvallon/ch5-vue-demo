import Vue from 'vue'
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

export default CrComLib