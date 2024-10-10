export class Character {
  id: number
  name: string
  image: string
  url: string

  constructor(id: number, name: string, image: string, url: string) {
    this.id = id
    this.name = name
    this.image = image
    this.url = url
  }
}

export interface CharacterData {
  id: number
  name: string
  image: string
  images?: any
  universe: string
  main_properties: any
  extra_properties?: any
}
