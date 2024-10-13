import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import CharacterCard from '~/components/Application/Character/CharacterCard.vue'

describe('characterCard.vue', () => {
  it('renders the character card with correct name and link', async () => {
    const wrapper = await mountSuspended(CharacterCard, {
      props: {
        character: {
          id: 1,
          name: 'Rick Sanchez',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          url: '/universes/rickmorty/1',
        },
      },
    })

    expect(wrapper.text()).toContain('Rick Sanchez')

    const link = wrapper.findComponent({ name: 'NuxtLink' })
    expect(link.props('to')).toBe('/universes/rickmorty/1')
  })
})
