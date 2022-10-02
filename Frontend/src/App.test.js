import { render, screen } from '@testing-library/vue'
import { test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

test('renders the footer text', () => {
  render(App)
  const footerElement = screen.getByText(/clearpoint.digital/i)
  expect(footerElement).toBeTruthy()
})

test('renders the footer text', async () => {
  const wrapper = shallowMount(App)
  const button = wrapper.find('#refresh')
  // console.log(button)
  const result = await button.trigger('click')
  // console.log(result)
})
