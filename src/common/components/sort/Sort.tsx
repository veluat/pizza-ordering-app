import React, { useState } from 'react'

import arrow from '@/assets/arrow-top.svg'
import { idGenerator } from '@/common/utils/idGenerator'

import s from './Sort.module.scss'

export const Sort: React.FC<SortListType> = ({ onChangeSortType, value }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const sortList = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене (сначала дешевле)', sortProperty: '-price' },
    { name: 'цене (сначала дороже)', sortProperty: 'price' },
    { name: 'алфавиту (от А до Я)', sortProperty: '-title' },
    { name: 'алфавиту (от Я до А)', sortProperty: 'title' },
  ]

  const listItemHandler = (obj: { name: string; sortProperty: string }) => {
    onChangeSortType(obj)
    setIsOpen(false)
  }

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        <div>
          <img
            alt={'arrow'}
            className={isOpen ? `${s.image} ${s.rotated}` : `${s.image}`}
            height={6}
            src={arrow}
            width={10}
          />
          <b>Сортировка по:</b>
        </div>
        <span onClick={() => setIsOpen(!isOpen)}>{value.name}</span>
      </div>
      {isOpen && (
        <div className={s.sort__popup}>
          <ul>
            {sortList.map(obj => (
              <li
                className={value.sortProperty === obj.sortProperty ? `${s.active}` : ''}
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
export type SortListType = {
  onChangeSortType: (i: { name: string; sortProperty: string }) => void
  value: { name: string; sortProperty: string }
}
