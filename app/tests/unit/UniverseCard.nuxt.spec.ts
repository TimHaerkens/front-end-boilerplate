// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import UniverseCard from '~/components/Application/Universe/UniverseCard.vue'

describe('universeCard.vue', () => {
  it('renders the universe card with correct name and description', async () => {
    const wrapper = await mountSuspended(UniverseCard, {
      props: {
        name: 'Pokemon',
        description: 'Pokemon characters',
        route: '/universes/pokemon',
      },
    })

    expect(wrapper.text()).toContain('Pokemon')
    expect(wrapper.text()).toContain('Pokemon characters')
  })

  it('has the correct NuxtLink with the right route', async () => {
    const wrapper = await mountSuspended(UniverseCard, {
      props: {
        name: 'Pokemon',
        description: 'Pokemon characters',
        route: '/universes/pokemon',
      },
    })

    const link = wrapper.findComponent({ name: 'NuxtLink' })
    expect(link.props('to')).toBe('/universes/pokemon')
  })
})
