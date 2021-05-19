export const navlistitem = {
  namespaced: true,
  state() {
    return {
      isActive: false,
      isHidden: false,
      isDisabled: false,
      label: 'Default Label',
      icon: '',
      route: '/',
      pressJoin: '',
      events: []
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
    },
    isDisabled(state) {
      return state.isDisabled;
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
    setDisabledState(state, value) {
      state.isDisabled = value;
    },
    setHiddenState(state, value) {
      state.isHidden = value;
    },
    setPressJoin(state, value) {
      state.pressJoin = value;
    },
    addEvent(state, data) {
      state.events.push(data);
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
    setDisabledState({ commit }, payload) {
      commit('setDisabledState', payload);
    },
    setHiddenState({ commit }, payload) {
      commit('setHiddenState', payload);
    },
    initialize({ commit }, data) {
      commit('setLabel', data.label);
      commit('setIcon', data.icon);
      commit('setRoute', data.route);

      if (typeof data.events !== 'undefined') {
        data["events"].forEach(event => {
          if (event.type == "b") {
            commit('addEvent', event);
          }
        });
      }

      if (typeof data.subscriptions !== 'undefined') {
        data.subscriptions.forEach(sub => {
          this._vm.$api.subscribe(`${sub.type}`, sub.join, (value) => {
            commit(`${sub.action}`, value);
          })
        })
      }
    },
    clicked({ state }) {
      state.events.forEach(ev => {
        if (ev.type === "b") {
          this._vm.$api.pulse(ev.join);
        }
      })
    }
  }
}

export default navlistitem;