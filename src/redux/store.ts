import { useDispatch } from 'react-redux'

import cart from '@/redux/cart/CartSlice'
import filter from '@/redux/filter/filterSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart,
    filter,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
