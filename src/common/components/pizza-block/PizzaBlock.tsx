import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IncDecButtons } from '@/common/components/IncDecButtons/IncDecButtons'
import { idGenerator } from '@/common/utils/idGenerator'
import { addItem, minusItem, removeItem } from '@/redux/cart/cartSlice'
import { selectCartItemById } from '@/redux/cart/selectors'
import { CartItem } from '@/redux/cart/types'

import s from './PizzaBlock.module.scss'

type PizzaBlockPropsType = {
  id: string
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}
const typeNames = ['тонкое тесто', 'стандартная']

export const PizzaBlock: React.FC<PizzaBlockPropsType> = ({
  id,
  imageUrl,
  price,
  sizes,
  title,
  types,
}) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItemById(id))
  const [activeType, setActiveType] = useState(1)
  const [activeSize, setActiveSize] = useState(0)
  const addedCount = cartItem ? cartItem.count : 0
  const onClickPlus = () => {
    const item: CartItem = {
      count: 0,
      id,
      imageUrl,
      price,
      size: sizes[activeSize],
      title,
      type: typeNames[activeType],
    }

    dispatch(addItem(item))
  }
  const onClickMinus = () => {
    if (cartItem && cartItem.count === 1) {
      dispatch(removeItem(id))
    } else {
      dispatch(minusItem(id))
    }
  }

  return (
    <div className={s.pizza__block}>
      <Link className={s.pizza__block__link} key={id} to={`/pizza/${id}`}>
        <img alt={'Пицца'} className={s.pizzaBlock__image} src={imageUrl} width={260} />
        <h4 className={s.pizzaBlock__title}>{title}</h4>
      </Link>
      <div className={s.pizzaBlock__selector}>
        <ul>
          {types.map(typeId => (
            <li
              className={activeType === typeId ? `${s.active}` : ''}
              key={idGenerator()}
              onClick={() => setActiveType(typeId)}
            >
              {typeNames[typeId]}
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
        {addedCount > 0 ? (
          <button className={s.pizzaBlock__button}>
            <IncDecButtons
              count={addedCount}
              onClickMinus={onClickMinus}
              onClickPlus={onClickPlus}
            />
          </button>
        ) : (
          <button className={s.pizzaBlock__button} onClick={onClickPlus}>
            <span>Добавить</span>
          </button>
        )}
      </div>
    </div>
  )
}
