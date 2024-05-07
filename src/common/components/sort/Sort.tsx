import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import arrow from '@/assets/arrow-top.svg'
import { idGenerator } from '@/common/utils/idGenerator'
import { setSort } from '@/redux/filter/filterSlice'
import { selectSort } from '@/redux/filter/selectors'
import { SortPropertyEnum } from '@/redux/filter/types'

import s from './Sort.module.scss'

const sortList: SortItem[] = [
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'цене (сначала дешевле)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'цене (сначала дороже)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'алфавиту (от А до Я)', sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: 'алфавиту (от Я до А)', sortProperty: SortPropertyEnum.TITLE_DESC },
]

export const Sort: React.FC = () => {
  const dispatch = useDispatch()
  const sort = useSelector(selectSort)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const listItemHandler = (obj: SortItem) => {
    dispatch(setSort(obj))
    setIsOpen(false)
  }

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        <div className={s.sort__img}>
          <img
            alt={'arrow'}
            className={isOpen ? `${s.image} ${s.rotated}` : `${s.image}`}
            height={6}
            src={arrow}
            width={10}
          />
          <b>Сортировка по:</b>
        </div>
        <span onClick={() => setIsOpen(!isOpen)}>{sort.name}</span>
      </div>
      {isOpen && (
        <div className={s.sort__popup}>
          <ul>
            {sortList.map(obj => (
              <li
                className={sort.sortProperty === obj.sortProperty ? `${s.active}` : ''}
                key={idGenerator()}
                onClick={() => listItemHandler(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

type SortItem = {
  name: string
  sortProperty: SortPropertyEnum
}
