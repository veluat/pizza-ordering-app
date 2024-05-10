export type Pizza = {
  id: string
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}

export enum Status {
  ERROR = 'error',
  LOADING = 'loading',
  SUCCESS = 'completed',
}

export type SearchPizzaParams = {
  category: string
  currentPage: string
  order: string
  search: string
  sortBy: string
}

export interface PizzaSliceState {
  items: Pizza[]
  status: Status
}
