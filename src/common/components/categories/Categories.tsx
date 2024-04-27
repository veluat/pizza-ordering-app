import React from 'react'

import { idGenerator } from '@/common/utils/idGenerator'

import s from '../categories/Categories.module.scss'

export const Categories: React.FC<{ onChangeCategory: (i: number) => void; value: number }> = ({
  onChangeCategory,
  value,
}) => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Барбекю', 'Острые', 'Сырные']

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            className={value === i ? `${s.active}` : ''}
            key={idGenerator()}
            onClick={() => onChangeCategory(i)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
