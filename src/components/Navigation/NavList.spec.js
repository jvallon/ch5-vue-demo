import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router';

import NavList from '@/components/Navigation/NavList.vue'
import * as ch5WrapperMock from '@/../tests/mocks/ch5-wrapper.mock.js'

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue();
library.add(fas);
localVue.component('font-awesome-icon', FontAwesomeIcon);
localVue.use(VueRouter);
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
    "pressJoin": "1",
    "icon": "camera",
    "routeTo": "/presentation"
  }
]

describe('NavList.vue', () => {
  const navListFactory = (propsData) => {
    const router = new VueRouter({ routes })
    return mount(NavList, {
      mocks: {
        $api: ch5WrapperMock,
      },
      propsData: {
        ...propsData
      },
      localVue,
      router,
    })
  }

  it('tests render of component', () => {
    const wrapper = navListFactory({ items: navitems })

    expect(wrapper.findAll('.icon').length).toEqual(navitems.length);
  })
})
