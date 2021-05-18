import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router';

import NavListItem from '@/components/Navigation/NavListItem.vue'
import * as ch5WrapperMock from '../mocks/ch5-wrapper.mock.js'

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue();
library.add(fas);
localVue.component('font-awesome-icon', FontAwesomeIcon);
localVue.use(VueRouter);

const router = new VueRouter();
const $route = {
  path: '/testpath'
}

describe('NavListItem.vue', () => {
  const label = "test label"
  const navFactory = (propsData) => {
    return mount(NavListItem, {
      mocks: {
        $api: ch5WrapperMock,
        // $route: $route
      },
      propsData: {
        label,
        ...propsData
      },
      localVue,
      router
    })
  }
  
  // it('tests if api mocked automatically', () => {
  //   // Public methods of `utils` are now mock functions
  //   expect(ch5WrapperMock.press.mock).toBeTruthy();
  //   expect(ch5WrapperMock.release.mock).toBeTruthy();
  // })
    
  it('renders label when passed', () => {
    const wrapper = navFactory()

    expect(wrapper.text()).toMatch(label)
  })

  it('renders icon when passed', () => {
    const icon = 'camera'
    const wrapper = navFactory({ icon: icon })

    expect(wrapper.find(`[data-icon=${icon}`)).toBeTruthy();
  })

  it('emits clicked on label click', async () => {
    const btnJoin = "1"
    const wrapper = navFactory({ join: btnJoin })
    
    wrapper.find(".label").trigger("click")
    expect(wrapper.emitted().clicked).toEqual([[]]);
  })

  it('emits clicked on icon click', async () => {
    const btnJoin = "1"
    const wrapper = navFactory({ icon: "camera", join: btnJoin })
    
    wrapper.find(".icon").trigger("click")
    expect(wrapper.emitted().clicked).toEqual([[]]);
  })

  it('routes to the routeTo param on icon click', () => {
    const icon = "camera"
    const btnJoin = "1"
    const wrapper = navFactory({icon: icon, join: btnJoin, routeTo: $route.path})
    wrapper.find(".icon").trigger("click")

    expect(wrapper.vm.$route.path).toEqual($route.path);
  })

  it('routes to the routeTo param on label click', () => {
    const icon = "camera"
    const btnJoin = "1"
    const wrapper = navFactory({icon: icon, join: btnJoin, routeTo: $route.path})
    wrapper.find(".label").trigger("click")

    expect(wrapper.vm.$route.path).toEqual($route.path);
  })
})
