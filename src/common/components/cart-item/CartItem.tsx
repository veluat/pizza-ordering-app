import React from 'react'
import { useDispatch } from 'react-redux'

import close_icon from '@/assets/close.svg'
import { IncDecButtons } from '@/common/components/button/IncDecButtons'
import { addItem, minusItem, removeItem } from '@/redux/cart/CartSlice'

import s from './CartItem.module.scss'

export type CartItemProps = {
  count: number
  id: string
  imageUrl: string
  price: number
  size: number
  title: string
  type: string
}

export const CartItem: React.FC<CartItemProps> = ({
  count,
  id,
  imageUrl,
  price,
  size,
  title,
  type,
}) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemProps)
    )
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id))
    }
  }

  return (
    <div className={s.cart__item}>
      <div className={s.cart__itemImg}>
        <img alt={'Pizza'} className={s.pizzaBlock__image} src={imageUrl} />
      </div>
      <div className={s.cart__itemInfo}>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <IncDecButtons count={count} onClickMinus={onClickMinus} onClickPlus={onClickPlus} />
      <div className={s.cart__itemPrice}>
        <b>{price * count} ₽</b>
      </div>
      <div className={s.cart__itemRemove} onClick={onClickRemove}>
        <img alt={'close'} className={s.clearIcon} height={'20'} src={close_icon} width={'20'} />
      </div>
    </div>
  )
}
