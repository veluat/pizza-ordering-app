export enum SortPropertyEnum {
  PRICE_ASC = '-price',
  PRICE_DESC = 'price',
  RATING_ASC = '-rating',
  RATING_DESC = 'rating',
  TITLE_ASC = '-title',
  TITLE_DESC = 'title',
}

export type Sort = {
  name: string
  sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
  categoryId: number
  currentPage: number
  searchValue: string
  sort: Sort
}
