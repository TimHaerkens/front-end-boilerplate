export interface Universe {
  name: string
  description: string
  route: string
  image?: string
  api?: any
  fetch?: any
  characterPath?: string
  pagination?: (page: number) => string
  pages?: (data: any) => number
  mapData?: (data: any) => any
  mapCharacter?: (data: any) => CharacterData
}
