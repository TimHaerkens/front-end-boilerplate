import type { Character } from '~/types/Character'

export interface Universe {
  name: string
  description: string
  route: string
  image?: string
  api?: any
  characterPath?: string
  mapData?: (data: any) => any
  mapCharacter?: (data: any) => any
}

export const universes: Universe[] = [
  {
    name: 'Rick & Morty',
    description: 'Rick & Morty characters',
    route: 'universes/rickmorty',
    image: '/images/rickmorty.jpg',
    api: useRickAndMortyData,
    characterPath: 'character',
    mapData: (data: any) => data.results.map((character: any) => ({
      name: character.name,
      image: character.image,
      url: `/universes/rickmorty/${character.id}`,
    })),
    mapCharacter: (data: any) => {
      return ({ name: data.name, image: data.image, url: `/universes/rickmorty/${data.id}` })
    },

  },
  {
    name: 'Pokemon',
    description: 'Pokemon characters',
    route: 'universes/pokemon',
    image: '/images/pokemon.jpg',
    api: usePokemonData,
    characterPath: 'pokemon',
    mapData: (data: any) => data.results.map((pokemon: any) => ({
      name: pokemon.name,
      image: null,
      url: `/universes/pokemon/${pokemon.url.split('/')[6]}`,
    })),
    mapCharacter: (data: any) => {
      return ({ name: data.name, image: null, url: `/universes/pokemon/${data.id}` })
    },
  },
  {
    name: 'Star Wars',
    description: 'Star Wars characters',
    route: 'universes/starwars',
    image: '/images/starwars.jpg',
    api: useStarwarsData,
    characterPath: 'people',
    mapData: (data: any) => data.results.map((character: any) => ({
      name: character.name,
      image: null,
      url: `/universes/starwars/${character.url.split('/')[5]}`,
    })),
    mapCharacter: (data: any) => {
      return ({ name: data.name, image: null, url: `/universes/starwars/${data.id + 1}` })
    },
  },
]
