import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Categories, SortPopup } from '@/common/components'
import { Pagination } from '@/features/layot/pagination/Pagination'
import { PizzaSection } from '@/features/layot/pizza-section/PizzaSection'
import { setCategoryId, setCurrentPage } from '@/redux/filter/filterSlice'
import { selectFilter } from '@/redux/filter/selectors'
import { fetchPizzas } from '@/redux/pizza/asyncActions'
import { selectPizzaData } from '@/redux/pizza/selectors'
import { useAppDispatch } from '@/redux/store'

import s from './Home.module.scss'

export const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const { items, status } = useSelector(selectPizzaData)
  const { categoryId, currentPage, searchValue, sort } = useSelector(selectFilter)

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx))
  }, [])

  const onChangePage = useCallback((page: number) => {
    dispatch(setCurrentPage(page))
  }, [])

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? String(categoryId) : ''
    const search = searchValue

    dispatch(
      fetchPizzas({
        category,
        currentPage: String(currentPage),
        order,
        search,
        sortBy,
      })
    )

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  return (
    <>
      <div className={s.sortFilterBlock}>
        <Categories onChangeCategory={onChangeCategory} value={categoryId} />
        <SortPopup value={sort} />
      </div>
      <PizzaSection items={items} status={status} />
      <div className={s.paginationBlock}>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  )
}
