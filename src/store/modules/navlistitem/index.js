export const navlistitem = {
  namespaced: true,
  state() {
    return {
      isActive: false,
      label: 'Default Label',
      icon: '',
      route: '/',
      pressJoin: ''
    }
  },
  getters: {
    getLabel(state) {
      return state.label;
    },
    getIcon(state) {
      return state.icon;
    },
    getRoute(state) {
      return state.route;
    },
    isActive(state) {
      return state.isActive;
    }
  },
  mutations: {
    setLabel(state, value) {
      state.label = value;
    },
    setIcon(state, value) {
      state.icon = value;
    },
    setRoute(state, value) {
      state.route = value;
    },
    setActiveState(state, value) {
      state.isActive = value;
    },
    setPressJoin(state, value) {
      state.pressJoin = value;
    }
  },
  actions: {
    setLabel({ commit }, payload) {
      commit('setLabel', payload);
    },
    setIcon({ commit }, payload) {
      commit('setIcon', payload);
    },
    setRoute({ commit }, payload) {
      commit('setRoute', payload);
    },
    setActiveState({ state, commit }, payload) {
      if (state.isActive !== payload) {
        commit('setActiveState', payload);
      }
    },
    initialize({ commit }, data) {
      commit('setLabel', data.label);
      commit('setIcon', data.icon);
      commit('setRoute', data.routeTo);
      commit('setPressJoin', data.pressJoin)
    },
    subscribeAll({ state, commit }) {
      if (typeof state.pressJoin !== 'undefined') {
        this._vm.$api.subscribe('b', state.pressJoin, function(value){
          commit('setActiveState', value)
        });
      }
    },
    clicked({ state }) {
      if (typeof state.pressJoin !== 'undefined') {
        this._vm.$api.pulse(state.pressJoin);
      }
    }
  }
}

export default navlistitem;