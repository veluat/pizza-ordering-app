import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from '@/features/footer'
import { Header } from '@/features/header'
import { Cart } from '@/pages/cart'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'

import s from '@/App.module.scss'

export interface SearchContextType {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchContextType>({
  searchValue: '',
  setSearchValue: () => {},
})

export function App() {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className={s.wrapper}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route element={<Home />} path={'/'} />
          <Route element={<Cart />} path={'cart'} />
          <Route element={<NotFound />} path={'*'} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </div>
  )
}
