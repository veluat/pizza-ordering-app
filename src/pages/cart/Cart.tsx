import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartEmpty } from '@/common/components/cart-empty/CartEmpty'
import { CartItem } from '@/common/components/cart-item/CartItem'
import { Icon } from '@/common/components/icon/Icon'
import { ReturnBack } from '@/common/components/return-back/ReturnBack'
import { clearItems } from '@/redux/cart/CartSlice'
import { selectCart } from '@/redux/cart/selectors'

import s from './Cart.module.scss'

export const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(selectCart)

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems())
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  }

  return (
    <div className={s.cartContent}>
      <div className={s.cart__top}>
        <h2 className={s.content__title}>
          <Icon
            fill={'none'}
            height={'22'}
            sprId={'cart-black'}
            viewBox={'0 0 18 18'}
            width={'22'}
          />
          Корзина
        </h2>
        <div className={s.cart__clear} onClick={onClickClear}>
          <Icon fill={'none'} height={'20'} sprId={'trash'} viewBox={'0 0 20 20'} width={'20'} />
          Очистить корзину
        </div>
      </div>
      <div className={s.content__items}>
        {items.map((item: any) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className={s.cart__bottom}>
        <div className={s.cart__details}>
          <span>
            {' '}
            Всего пицц: <b>{totalCount} шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>{totalPrice} ₽</b>{' '}
          </span>
        </div>
        <div className={s.cartButtons}>
          <ReturnBack />
          <div className={s.paid}>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  )
}
