import { fetchPizzas } from '@/redux/pizza/asyncActions'
import { Pizza, PizzaSliceState, Status } from '@/redux/pizza/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

const pizzaSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, state => {
      state.status = Status.LOADING
      state.items = []
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchPizzas.rejected, state => {
      state.status = Status.ERROR
      state.items = []
    })
  },
  initialState,
  name: 'pizza',
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
