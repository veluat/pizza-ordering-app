import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import close_icon from '@/assets/close.svg'
import { IncDecButtons } from '@/common/components/IncDecButtons/IncDecButtons'
import { Modal } from '@/common/components/modal/Modal'
import { addItem, minusItem, removeItem } from '@/redux/cart/cartSlice'

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
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemProps)
    )
  }

  const onClickMinus = () => {
    if (count === 1) {
      dispatch(removeItem(id))
    }
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    setIsModalVisible(true)
  }
  const closeModal = () => {
    setIsModalVisible(false)
  }
  const confirmRemoveItem = () => {
    dispatch(removeItem(id))
    setIsModalVisible(false)
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
      <Modal
        closeModal={closeModal}
        confirmAction={confirmRemoveItem}
        isVisible={isModalVisible}
        itemId={id}
        question={'Удалить товар?'}
      />
    </div>
  )
}
