export type Game = {
  slug: string
  name: string
  released: string | null
  background_image: string | null
  rating: number | null
}

export type GameResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Game[]
}

export type GameInfo = {
  name: string
  slug: string
  description: string
  released: string
  rating: number
  ratings_count: number
  background_image: string
  website: string
  platforms: {
    platform: {
      id: number
      name: string
      slug: string
    }
  }[]
  genres: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  developers: {
    id: number
    name: string
    slug: string
  }[]
  publishers: {
    id: number
    name: string
    slug: string
  }[]
}

export type GameImg = {
  id: number
  image: string
  width: number
  height: number
  is_deleted: boolean
}
