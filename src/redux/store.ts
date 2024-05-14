import { useDispatch } from 'react-redux'

import cart from '@/redux/cart/cartSlice'
import filter from '@/redux/filter/filterSlice'
import pizza from '@/redux/pizza/pizzaSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart,
    filter,
    pizza,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
