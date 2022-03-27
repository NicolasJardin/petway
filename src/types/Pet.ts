export interface Pet {
  id?: string
  age: number
  description?: string
  species: string
  race?: string
  user: {
    id: string
    name: string
    avatar?: string
  }
}
