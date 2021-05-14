import { createLocalVue, mount } from '@vue/test-utils'
import NavListItem from '@/components/NavListItem.vue'
import * as ch5WrapperMock from '../mocks/ch5-wrapper.mock.js'

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue();
library.add(fas);
localVue.component('font-awesome-icon', FontAwesomeIcon);

describe('NavListItem.vue', () => {
  const label = "test label"
  const navFactory = (propsData) => {
    return mount(NavListItem, {
      mocks: {
        $api: ch5WrapperMock
      },
      propsData: {
        label,
        ...propsData
      },
      localVue
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

  it('sends press and release on click', async () => {
    const btnJoin = "1"
    const wrapper = navFactory({ join: btnJoin })
    const spyPress = jest.spyOn(wrapper.vm.$api, 'press');
    const spyRelease = jest.spyOn(wrapper.vm.$api, 'release');
    
    wrapper.find("button").trigger("click")
    expect(spyPress).toHaveBeenCalledWith(btnJoin)
    expect(spyRelease).toHaveBeenCalledWith(btnJoin)
  })
})
