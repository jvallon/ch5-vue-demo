import tv from '@/api/tv';

const state = {
    isOn: false,
    isOff: false,
    model: '',
    name: '',
}

const mutations = {
    setPowerOnState(state, value ) {
        state.isOn = value;
    },
    setPowerOffState(state, value ) {
        state.isOff = value;
    }
}

const actions = {
    powerOff({ state }) {
        if (state.isOff === false) {
            this._vm.$api.pulse(tv.joins.powerOff);
        }
    },
    powerOn({ state }) {
        if (state.isOn === false) {
            this._vm.$api.pulse(tv.joins.powerOn);
        }
    },
    subscribeAll( {commit} ) {
        if (typeof tv.joins.powerOn !== 'undefined') {
            this._vm.$api.subscribe('b', tv.joins.powerOn, function (value) {
                commit('setPowerOnState', value);
            });
        }

        if (typeof tv.joins.powerOff !== 'undefined') {
            this._vm.$api.subscribe('b', tv.joins.powerOff, function (value) {
                commit('setPowerOffState', value);
            });
        }
    },
    unsubscribeAll() {

    }
}

export default {
  namespaced: true,
  state,
//   getters,
  actions,
  mutations
}