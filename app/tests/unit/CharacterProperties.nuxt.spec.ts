import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import CharacterProperties from '~/components/Application/Character/CharacterProperties.vue'

describe('characterProperties.vue', () => {
  it('renders the correct properties', async () => {
    const properties = {
      height: 180,
      weight: 75,
      gender: 'Male',
    }

    const wrapper = await mountSuspended(CharacterProperties, {
      props: {
        properties,
      },
    })

    await nextTick()

    // Check that each property is rendered correctly
    expect(wrapper.text()).toContain('Height')
    expect(wrapper.text()).toContain('180')
    expect(wrapper.text()).toContain('Weight')
    expect(wrapper.text()).toContain('75')
    expect(wrapper.text()).toContain('Gender')
    expect(wrapper.text()).toContain('Male')
  })

  it('renders empty properties correct', async () => {
    const wrapper = await mountSuspended(CharacterProperties, {
      props: {
        properties: {},
      },
    })

    await nextTick()

    // Check if there are no errors
    expect(wrapper.text()).toBe('')
  })
})
