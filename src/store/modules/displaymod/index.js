export const display =  {
  namespaced: true,
  state() {
    return {
      isOn: false,
      isOff: false,
      model: '',
      name: 'defaultName',
      displayObj: ''
    }
  },
  getters: {
    getName(state) {
      return state.name;
    }
  },
  mutations: {
    setPowerOnState(state, value) {
      state.isOn = value;
    },
    setPowerOffState(state, value) {
      state.isOff = value;
    },
    setData(state, data) {
      state.displayObj = data;
    },
    setName(state , payload) {
      state.name = payload;
    }
  },
  actions: {
    setName({ commit}, payload) {
      commit('setName', payload);
    },
    powerOff({ state, }) {
        if (state.isOff === false) {
          this._vm.$api.pulse(state.displayObj.joins.powerOff);
        }
      },
      powerOn({ state }) {
        if (state.isOn === false) {
          this._vm.$api.pulse(state.displayObj.joins.powerOn);
        }
      },
      subscribeAll({ state, commit }) {
        if (typeof state.displayObj.joins.powerOn !== 'undefined') {
          this._vm.$api.subscribe('b', state.displayObj.joins.powerOn, function (value) {
            commit('setPowerOnState', value);
          });
        }

        if (typeof state.displayObj.joins.powerOff !== 'undefined') {
          this._vm.$api.subscribe('b', state.displayObj.joins.powerOff, function (value) {
            commit('setPowerOffState', value);
          });
        }
      },
      unsubscribeAll() {

      },
      initialize({ commit }, data) {
        commit('setData', data);
      }
    }
}
// const state = () => ({
//   isOn: false,
//   isOff: false,
//   model: '',
//   name: 'defaultName',
//   displayObj: null
// });

// const getters = {
//   getName(state) {
//     return state.name;
//   }
// };

// const mutations = {
//   setPowerOnState(state, value) {
//     state.isOn = value;
//   },
//   setPowerOffState(state, value) {
//     state.isOff = value;
//   },
//   setData(state, data) {
//     state.displayObj = data;
//   },
//   setName(state, payload) {
//     state.name = payload;
//   },
// };

// const actions = {
//   setName({ commit }, payload) {
//     commit('setName', payload);
//   },
//   powerOff({ state, getters }) {
//     console.log(`powerOff for ${getters.getName}`);
//     if (state.isOff === false) {
//       this._vm.$api.pulse(state.displayObj.joins.powerOff);
//     }
//   },
//   powerOn({ getters }) {
//     console.log(`powerOn for ${getters.getName}`);
//     if (state.isOn === false) {
//       this._vm.$api.pulse(state.displayObj.joins.powerOn);
//     }
//   },
//   subscribeAll({ commit }) {
//     if (typeof state.displayObj.joins.powerOn !== 'undefined') {
//       this._vm.$api.subscribe('b', state.displayObj.joins.powerOn, function (value) {
//         commit('setPowerOnState', value);
//       });
//     }

//     if (typeof state.displayObj.joins.powerOff !== 'undefined') {
//       this._vm.$api.subscribe('b', state.displayObj.joins.powerOff, function (value) {
//         commit('setPowerOffState', value);
//       });
//     }
//   },
//   unsubscribeAll() {

//   },
//   initialize({ commit }, data) {
//     commit('setData', data);
//   }
// };

// const display = {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
//   // modules,
// };

export default display;