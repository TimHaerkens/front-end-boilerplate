import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import CharacterImage from '~/components/Application/Character/CharacterImage.vue'
import CharacterProperties from '~/components/Application/Character/CharacterProperties.vue'
import CharacterPage from '~/pages/universes/[_universe]/[character].vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: {
      _universe: 'rickmorty',
      character: '1',
    },
  }),
}))

vi.mock('~/data/universes', () => ({
  universes: [
    {
      name: 'Rick and Morty',
      route: 'universes/rickmorty',
      characterPath: 'https://rickandmortyapi.com/api/character',
      fetch: vi.fn(async () => ({
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick_image.jpg',
        main_properties: {
          height: 180,
          weight: 70,
        },
        extra_properties: {
          location: 'Earth',
          origin: 'C-137',
        },
      })),
      mapCharacter: vi.fn(data => ({
        name: data.name,
        image: data.image,
        main_properties: data.main_properties,
        extra_properties: data.extra_properties,
      })),
    },
  ],
}))

describe('[character].vue', () => {
  it('renders the character image, main properties, and extra properties', async () => {
    const wrapper = await mountSuspended(CharacterPage)

    await nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Rick Sanchez')

    // Check that the CharacterImage component is rendered with the correct image prop
    const imageComponent = wrapper.findComponent(CharacterImage)
    expect(imageComponent.props('image')).toBe('rick_image.jpg')

    // Check that CharacterProperties is used for main and extra properties
    const mainPropertiesComponent = wrapper.findComponent(CharacterProperties)
    expect(mainPropertiesComponent.props('properties')).toEqual({
      height: 180,
      weight: 70,
    })

    // Check that the extra properties are rendered
    const extraPropertiesComponent = wrapper.findAllComponents(CharacterProperties)[1]
    expect(extraPropertiesComponent?.props('properties')).toEqual({
      location: 'Earth',
      origin: 'C-137',
    })
  })

  it('has a working back button that navigates to the universe page', async () => {
    const wrapper = await mountSuspended(CharacterPage)

    await nextTick()

    // Check that the NuxtLink navigates back to the universe page
    const link = wrapper.findComponent({ name: 'NuxtLink' })
    expect(link.props('to')).toBe('/universes/rickmorty')
  })
})
