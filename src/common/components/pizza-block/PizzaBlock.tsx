import React, { useState } from 'react'

import { Icon } from '@/common/components/icon/Icon'
import { idGenerator } from '@/common/utils/idGenerator'

import s from './PizzaBlock.module.scss'

type PizzaBlockPropsType = {
  category: number
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}

export const PizzaBlock: React.FC<PizzaBlockPropsType> = ({
  imageUrl,
  price,
  sizes,
  title,
  types,
}) => {
  const typeNames = ['тонкое тесто', 'стандартная']
  const [activeType, setActiveType] = useState(1)
  const [activeSize, setActiveSize] = useState(0)

  return (
    <div className={s.pizza__block}>
      <img alt={'Пицца'} className={s.pizzaBlock__image} src={imageUrl} width={260} />
      <h4 className={s.pizzaBlock__title}>{title}</h4>
      <div className={s.pizzaBlock__selector}>
        <ul>
          {types.map(type => (
            <li
              className={activeType === type ? `${s.active}` : ''}
              key={idGenerator()}
              onClick={() => setActiveType(type)}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              className={activeSize === i ? `${s.active}` : ''}
              key={idGenerator()}
              onClick={() => setActiveSize(i)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className={s.pizzaBlock__bottom}>
        <div className={s.pizzaBlock__price}>{price} ₽</div>
        <button className={s.pizzaBlock__button}>
          <Icon fill={'#b730aa'} height={'12'} sprId={'plus'} viewBox={'0 0 12 12'} width={'12'} />
          Добавить
        </button>
      </div>
    </div>
  )
}
