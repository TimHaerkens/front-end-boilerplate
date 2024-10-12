import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import Pagination from '~/components/Application/Universe/Pagination.vue'

describe('pagination.vue', () => {
  it('emits the correct event when the next button is clicked', async () => {
    const wrapper = await mountSuspended(Pagination, {
      props: {
        modelValue: 1,
        pages: 10,
      },
    })

    await nextTick()

    // Simulate clicking the next button
    const nextButton = wrapper.findAll('button').filter(button => button.text() === 'Next')[0]
    await nextButton?.trigger('click')

    // Check that it emits the correct event with the next page
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([2]) // Next page should be 2
  })

  it('emits the correct event when the previous button is clicked', async () => {
    const wrapper = await mountSuspended(Pagination, {
      props: {
        modelValue: 2,
        pages: 10,
      },
    })

    await nextTick()

    // Simulate clicking the previous button
    const prevButton = wrapper.findAll('button').filter(button => button.text() === 'Previous')[0]
    await prevButton?.trigger('click')

    // Check that it emits the correct event with the previous page
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([1]) // Previous page should be 1
  })

  it('disables the previous button on the first page and not on other pages', async () => {
    const wrapper = await mountSuspended(Pagination, {
      props: {
        modelValue: 1,
        pages: 10,
      },
    })

    await nextTick()

    // Check that the previous button is disabled
    const prevButton = wrapper.findAll('button').filter(button => button.text() === 'Previous')[0]
    expect(prevButton?.element.disabled).toBe(true)

    await wrapper.setProps({ modelValue: 2 })

    // Check that the previous button is NOT disabled
    expect(prevButton?.element.disabled).toBe(false)
  })
})
