import { createLocalVue, mount } from '@vue/test-utils'
import NavListItem from '@/components/NavListItem.vue'

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
      propsData: {
        label,
        ...propsData
      },
      localVue
    })
  }
  
  it('renders label when passed', () => {
    const wrapper = navFactory()

    expect(wrapper.text()).toMatch(label)
  })

  it('renders icon when passed', () => {
    const icon = 'camera'
    const wrapper = navFactory({ icon: icon })

    expect(wrapper.find(`[data-icon=${icon}`)).toBeTruthy();
  })
})
