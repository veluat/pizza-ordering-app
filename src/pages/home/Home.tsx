import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SearchContext } from '@/App'
import { Categories, Sort } from '@/common/components'
import { Pagination } from '@/features/layot/pagination/Pagination'
import { PizzaSection } from '@/features/layot/pizza-section/PizzaSection'
import { setCategoryId } from '@/redux/filter/filterSlice'
import { selectFilter } from '@/redux/filter/selectors'

import s from './Home.module.scss'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { categoryId } = useSelector(selectFilter)
  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx))
  }, [])
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = useState<ItemsType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [sortType, setSortType] = useState<{ name: string; sortProperty: string }>({
    name: 'популярности',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(
      `https://662aa7afd3f63c12f45850dc.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then(res => res.json())
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scroll(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <>
      <div className={s.sortFilterBlock}>
        <Categories onChangeCategory={onChangeCategory} value={categoryId} />
        <Sort onChangeSortType={i => setSortType(i)} value={sortType} />
      </div>
      <PizzaSection isLoading={isLoading} items={items} />
      <div className={s.paginationBlock}>
        <Pagination currentPage={currentPage} onChangePage={number => setCurrentPage(number)} />
      </div>
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
