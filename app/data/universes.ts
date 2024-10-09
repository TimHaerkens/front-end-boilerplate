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
      return ({
        name: data.name,
        image: data.image,
        main_properties: {
          status: data.status,
          gender: data.gender,
          species: data.species,
        },
        extra_properties: {
          origin: data.origin.name,
          location: data.location.name,
        },
      })
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
      return ({
        name: data.name,
        image: data.sprites.front_default,
        // images: data.sprites,
        main_properties: {
          height: data.height,
          weight: data.weight,
        },
        extra_properties: {
          types: data.types.map((type: any) => type.type.name),
        },
      })
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
      return ({
        name: data.name,
        image: null,
        main_properties: {
          gender: data.gender,
          height: data.height,
          weight: data.mass,
        },
        extra_properties: {
          hair_color: data.hair_color,
          skin_color: data.skin_color,
          eye_color: data.eye_color,
          birth_year: data.birth_year,
        },
      })
    },
  },
]
