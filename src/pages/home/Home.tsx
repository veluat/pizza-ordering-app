import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SearchContext } from '@/App'
import { Categories, Sort } from '@/common/components'
import { Pagination } from '@/features/layot/pagination/Pagination'
import { PizzaSection } from '@/features/layot/pizza-section/PizzaSection'
import { setCategoryId, setCurrentPage } from '@/redux/filter/filterSlice'
import { selectFilter } from '@/redux/filter/selectors'
import axios from 'axios'
import qs from 'qs'

import s from './Home.module.scss'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categoryId, currentPage, sort } = useSelector(selectFilter)

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx))
  }, [])
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = useState<ItemsType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    axios
      .get(
        `https://662aa7afd3f63c12f45850dc.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scroll(0, 0)
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  useEffect(() => {
    const queryString = qs.stringify({
      categoryId,
      currentPage,
      sortProperty: sort.sortProperty,
    })

    navigate(`/?${queryString}`)
  }, [categoryId, sort.sortProperty, currentPage])

  return (
    <>
      <div className={s.sortFilterBlock}>
        <Categories onChangeCategory={onChangeCategory} value={categoryId} />
        <Sort />
      </div>
      <PizzaSection isLoading={isLoading} items={items} />
      <div className={s.paginationBlock}>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
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
