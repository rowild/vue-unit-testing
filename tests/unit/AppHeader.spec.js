import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  test('If not logged in, do not show Logout button.', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  test('If logged in, show Logout button.', () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
