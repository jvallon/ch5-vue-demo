import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import NavListItem from '@/components/Navigation/NavListItem.vue'
import * as ch5WrapperMock from '../../../tests/mocks/ch5-wrapper.mock.js'

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue();
library.add(fas);
localVue.component('font-awesome-icon', FontAwesomeIcon);
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter();

const store = new Vuex.Store({
  modules: {
    navitem: {
      namespaced: true,
      state: () => ({
        label: "menu1",
        icon: "camera",
        route: "/someroute",
        isActive: false,
      })
    }
  }
})

describe('NavListItem.vue', () => {
  // const label = "test label"
  const namespace = "navitem"
  const navFactory = (propsData) => {
    return mount(NavListItem, {
      mocks: {
        $api: ch5WrapperMock,
        // $route: $route
      },
      propsData: {
        namespace,
        ...propsData
      },
      localVue,
      router,
      store
    })
  }
  
  // it('tests if api mocked automatically', () => {
  //   // Public methods of `utils` are now mock functions
  //   expect(ch5WrapperMock.press.mock).toBeTruthy();
  //   expect(ch5WrapperMock.release.mock).toBeTruthy();
  // })
    
  it('renders label when passed', () => {
    const wrapper = navFactory()

    expect(wrapper.find(".label").text()).toBe("menu1")
  })

  it('renders icon when passed', () => {
    const wrapper = navFactory()

    expect(wrapper.find(`[data-icon=${store.state[namespace].icon}`)).toBeTruthy();
  })

  it('emits clicked on label click', async () => {
    const wrapper = navFactory()
    
    wrapper.find(".label").trigger("click")
    expect(wrapper.emitted().clicked).toEqual([[]]);
  })

  it('emits clicked on icon click', async () => {
    const wrapper = navFactory()
    
    wrapper.find(".icon").trigger("click")
    expect(wrapper.emitted().clicked).toEqual([[]]);
  })

  it('routes to the route state on icon click', () => {
    const wrapper = navFactory()
    wrapper.find(".icon").trigger("click")

    expect(wrapper.vm.$route.path).toEqual(store.state.[namespace].route);
  })

  it('routes to the route state on label click', () => {
    const wrapper = navFactory()
    wrapper.find(".label").trigger("click")

    expect(wrapper.vm.$route.path).toEqual(store.state.[namespace].route);
  })
})
