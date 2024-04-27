import { Route, Routes } from 'react-router-dom'

import { Footer } from '@/features/footer'
import { Header } from '@/features/header'
import { Cart } from '@/pages/cart'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'

import s from '@/App.module.scss'

export function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route element={<Cart />} path={'cart'} />
        <Route element={<NotFound />} path={'*'} />
      </Routes>
      <Footer />
    </div>
  )
}
