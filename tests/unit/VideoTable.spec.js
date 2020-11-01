import { shallowMount } from '@vue/test-utils'
import VideoTable from '@/components/VideoTable.vue'

describe('VideoTable.vue', () => {
  it('renders props.msg when passed', () => {
    const subject = 'Chess'
    const wrapper = shallowMount(VideoTable, {
      propsData: { subject }
    })
    expect(wrapper.text()).toMatch(subject)
  })
})
