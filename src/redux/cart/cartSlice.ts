import { calcTotalPrice } from '@/common/utils/calcTotalPrice'
import { getCartFromLS } from '@/common/utils/getCartFromLS'
import { CartItem, CartSliceState } from '@/redux/cart/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: CartSliceState = getCartFromLS()

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj.id === action.payload)

      if (findItem) {
        findItem.count--
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items)
    },
  },
})

export const { addItem, clearItems, minusItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
