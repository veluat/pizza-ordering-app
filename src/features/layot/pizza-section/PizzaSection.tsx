import React, { useEffect, useState } from 'react'

import { PizzaBlock } from '@/common/components'
import { Skeleton } from '@/common/components/skeleton/Skeleton'

import s from './PizzaSection.module.scss'

export const PizzaSection: React.FC = () => {
  const [items, setItems] = useState<ItemsType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://662aa7afd3f63c12f45850dc.mockapi.io/items')
      .then(res => res.json())
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
  }, [])

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

type ItemsType = {
  category: number
  id: number
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}
