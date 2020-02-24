import RandomNumber from '@/components/RandomNumber.vue'
import { mount } from '@vue/test-utils'

describe(RandomNumber, () => {
  test('By default randomNumber dat value is 0', () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('span')
    expect(true).toBe(false)
  })

  test('If the generateRandomNumber button is clicked, the value of randomNuber is between 1 and 10', () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('span')
    expect(true).toBe(false)
  })

  test('If the generateRandomNumber button is clicked, the value of randomNuber is between 200 and 300 (testing proper usage of props)', () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('span')
    expect(true).toBe(false)
  })
})
