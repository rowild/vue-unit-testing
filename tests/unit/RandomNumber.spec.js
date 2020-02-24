import RandomNumber from '@/components/RandomNumber.vue'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

describe('RandomNumber.vue', () => {
  const wrapper = mount(RandomNumber)
  // console.log('wrapper.vm =', wrapper.vm)

  test('By default randomNumber\'s initial value is 0', () => {
    expect(wrapper.html()).toContain('<span class="number">0</span>')
    // expect(true).toBe(false)
  })

  // it's also easy to check for the existence of elements
  test('There is a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  test('If the generateRandomNumber button is clicked, the value of randomNuber is between 1 and 10', async () => {
    wrapper.find('button').trigger('click')
    await Vue.nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent, 10)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)

    // expect(true).toBe(false)
  })

  test('If the generateRandomNumber button is clicked, the value of randomNuber is between 200 and 300 (testing proper usage of props)', async () => {
    // const wrapper = mount(RandomNummber, { propsData: { min: 200, max: 300 }})
    wrapper.setProps({ min: 200, max: 300 })
    wrapper.find('button').trigger('click')
    await Vue.nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent, 10)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)

    // expect(true).toBe(false)
  })
})
