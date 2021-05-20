import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import NavList from '@/components/Navigation/NavList.vue'
import * as ch5WrapperMock from '../../../tests/mocks/ch5-wrapper.mock.js'

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('NavList.vue', () => {
  const localVue = createLocalVue();
  library.add(fas);
  localVue.component('font-awesome-icon', FontAwesomeIcon);
  localVue.use(VueRouter);
  localVue.use(Vuex);

  const routes = [
    {
      path: '/test',
      name: "TestRoute",
    }
  ]
  const navitems = [
    {
      "id": "1",
      "label": "Menu 1",
      "icon": "camera",
      "route": "/test",
      "events": [{
        "type": "b",
        "join": "1"
      }],
      "subscriptions": [{
        "type": "b",
        "join": "1",
        "action": "setActiveState"
      },
      {
        "type": "s",
        "join": "1",
        "action": "setLabel"
      }
      ]
    },
    {
      "id": "2",
      "label": "Menu 2",
      "icon": "alert",
      "route": "/test2"
    }
  ]

  let store

  beforeEach(() => {
    store = new Vuex.Store()
    store.dispatch = jest.fn()
  })

  const router = new VueRouter({ routes })
  
  const navListFactory = (propsData) => {
    return mount(NavList, {
      mocks: {
        $api: ch5WrapperMock,
      },
      propsData: {
        ...propsData
      },
      localVue,
      router,
      store
    })
  }

  it('tests render of component', () => {
    const wrapper = navListFactory({ namespace: 'test', items: navitems })

    expect(wrapper.findAll('.icon').length).toEqual(navitems.length);
  })

  it('tests initialize is dispatched with data', () => {    
    const wrapper = navListFactory({ namespace: 'test', items: navitems })

    expect(store.dispatch).toHaveBeenCalledWith('test/item1/initialize', navitems[0]);
  })

  it('tests initialize is dispatched correct number of times', () => {
    const wrapper = navListFactory({namespace: 'test', items: navitems })
    expect(store.dispatch).toHaveBeenCalledTimes(navitems.length)
  })

  it('tests dispatch is called onclick', () => {    
    const wrapper = navListFactory({ namespace: 'test', items: navitems })

    wrapper.find('.nav-list-item').trigger('click')
    expect(store.dispatch).toHaveBeenCalledWith('test/item1/clicked');
  })
})
