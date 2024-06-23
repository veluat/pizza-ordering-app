import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartEmpty } from '@/common/components/cart-empty/CartEmpty'
import { CartItem } from '@/common/components/cart-item/CartItem'
import { Icon } from '@/common/components/icon/Icon'
import { Modal } from '@/common/components/modal/Modal'
import { ReturnButton } from '@/common/components/return-button/ReturnButton'
import { clearItems } from '@/redux/cart/cartSlice'
import { selectCart } from '@/redux/cart/selectors'

import s from './Cart.module.scss'

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

  const onClickClear = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const confirmClearCart = () => {
    dispatch(clearItems())
    setIsModalVisible(false)
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
          <Icon
            fill={'#b6b6b6'}
            height={'20'}
            sprId={'trash'}
            viewBox={'0 0 512 512'}
            width={'26'}
          />
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
          <span>Всего пицц:</span>
          <span>
            <b>{totalCount} шт.</b>
          </span>
          <span>Сумма заказа:</span>
          <span>
            <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className={s.cartButtons}>
          <ReturnButton />
          <div className={s.paid} title={'Это демо-версия. Оплата невозможна'}>
            <span>Оплатить</span>
          </div>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        confirmAction={confirmClearCart}
        isVisible={isModalVisible}
        question={'Очистить корзину?'}
      />
    </div>
  )
}

export default Cart
