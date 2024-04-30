import { FilterSliceState, SortPropertyEnum } from '@/redux/filter/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: '',
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
}
const filterSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
  },
})

export const { setCategoryId } = filterSlice.actions
export default filterSlice.reducer
