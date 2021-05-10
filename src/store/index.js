// import dependency to handle HTTP request to our back end
// import axios from 'axios'
import Vuex, { createLogger } from 'vuex'
import Vue from 'vue'
// import displaymod from './modules/displaymod'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        // "default": displaymod,
    },
    plugins: [createLogger()],
    strict: debug,
});
