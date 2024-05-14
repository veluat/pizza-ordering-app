import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loader } from '@/common/components/loader/Loader'
import { Footer } from '@/features/footer'
import { Header } from '@/features/header'
import { Home } from '@/pages/home'

import s from '@/App.module.scss'

const FullPizza = React.lazy(() => import('@/pages/full-pizza/FullPizza'))
const NotFound = React.lazy(() => import('@/pages/not-found/NotFound'))
const Cart = React.lazy(() => import('@/pages/cart/Cart'))

export function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          }
          path={'cart'}
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <FullPizza />
            </Suspense>
          }
          path={'/pizza/:id'}
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
          path={'*'}
        />
      </Routes>
      <Footer />
    </div>
  )
}
