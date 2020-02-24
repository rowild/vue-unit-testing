import Vue from 'vue'
import Counter from '@/components/Counter.vue'
import { mount } from '@vue/test-utils'

describe('Counter', () => {
  const wrapper = mount(Counter)
  // console.log('Counter wrapper.vm =', wrapper.vm)

  test('Initial count is 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  test('Clicking the button increments the counter by 1', async () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
    expect(wrapper.text()).toContain('0')
    await Vue.nextTick()
    const incrementedCount = parseInt(wrapper.find('span').element.textContent, 10)
    expect(incrementedCount).toBe(1)
  })
})
