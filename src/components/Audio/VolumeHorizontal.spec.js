import { createLocalVue, mount } from '@vue/test-utils'

import VolumeHorizontal from '@/components/Audio/VolumeHorizontal.vue'

// Font Awesome component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('VolumeHorizontal.vue', () => {
  const localVue = createLocalVue();
  library.add(fas);
  localVue.component('font-awesome-icon', FontAwesomeIcon)

  const volFactory = (propsData) => {
    return mount(VolumeHorizontal, {
      propsData: {
        ...propsData
      },
      localVue
    })
  }

  it('tests mute button renders', () => {
    const wrapper = volFactory();
    
    expect(wrapper.find('.mute')).toBeTruthy();
  })

  it('tests slider renders', () => {
    const wrapper = volFactory();
    expect(wrapper.find('.slider')).toBeTruthy();
  })

  it('tests up/down buttons render with prop', () => {
    const wrapper = volFactory({ showButtons: true });

    expect(wrapper.find('.up')).toBeTruthy();
    expect(wrapper.find('.down')).toBeTruthy();
  })
})