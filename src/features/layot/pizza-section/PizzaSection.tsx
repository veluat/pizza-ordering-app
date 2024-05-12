import React from 'react'

import { PizzaBlock } from '@/common/components'
import { ErrorMessage } from '@/common/components/error-message/ErrorMessage'
import { Skeleton } from '@/common/components/skeleton/Skeleton'

import s from './PizzaSection.module.scss'

export const PizzaSection: React.FC<{
  items: ItemsType[]
  status: string
}> = ({ items, status }) => {
  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
  const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)

  return (
    <div className={s.pizza__section}>
      <h2 className={s.content__title}>Все пиццы</h2>
      <div className={s.content__items}>
        {status === 'loading' && skeleton}
        {status === 'error' && <ErrorMessage />}
        {status === 'completed' && pizzas}
      </div>
    </div>
  )
}
export type ItemsType = {
  id: string
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}
