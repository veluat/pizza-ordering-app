import React, { useEffect, useState } from 'react'

import { Categories, Sort } from '@/common/components'
import { Pagination } from '@/features/layot/pagination/Pagination'
import { PizzaSection } from '@/features/layot/pizza-section/PizzaSection'

import s from './Home.module.scss'

export const Home: React.FC = () => {
  const [items, setItems] = useState<ItemsType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState<{ name: string; sortProperty: string }>({
    name: 'популярности',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    fetch(
      `https://662aa7afd3f63c12f45850dc.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then(res => res.json())
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scroll(0, 0)
  }, [categoryId, sortType])

  return (
    <>
      <div className={s.sortFilterBlock}>
        <Categories onChangeCategory={i => setCategoryId(i)} value={categoryId} />
        <Sort onChangeSortType={i => setSortType(i)} value={sortType} />
      </div>
      <PizzaSection isLoading={isLoading} items={items} />
      <Pagination />
    </>
  )
}
export type ItemsType = {
  category: number
  id: number
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}
