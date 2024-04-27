import React from 'react'

import { PizzaBlock } from '@/common/components'
import { Skeleton } from '@/common/components/skeleton/Skeleton'
import { ItemsType } from '@/pages/home'

import s from './PizzaSection.module.scss'

export const PizzaSection: React.FC<{ isLoading: boolean; items: ItemsType[] }> = ({
  isLoading,
  items,
}) => {
  return (
    <div className={s.pizza__section}>
      <h2 className={s.content__title}>Все пиццы</h2>
      <div className={s.content__items}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}