import React, { useState } from 'react'

import { idGenerator } from '@/common/utils/idGenerator'

import s from '../categories/Categories.module.scss'

export const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const categories = ['Все', 'Гавайская', 'Вегетарианская', 'Барбекю', 'Острая чили', 'Четыре сыра']

  const onClickCategory = (index: React.SetStateAction<number>) => {
    setActiveCategory(index)
  }

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            className={activeCategory === index ? `${s.active}` : ''}
            key={idGenerator()}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
