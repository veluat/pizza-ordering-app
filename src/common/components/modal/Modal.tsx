import React from 'react'
import { useDispatch } from 'react-redux'

import closeImg from '@/assets/close.svg'
import { Icon } from '@/common/components/icon/Icon'
import { ReturnButton } from '@/common/components/return-button/ReturnButton'
import { clearItems, removeItem } from '@/redux/cart/cartSlice'

import s from './Modal.module.scss'

export const Modal: React.FC<{
  closeModal: () => void
  confirmAction: () => void
  isVisible: boolean
  itemId?: string
  question: string
}> = ({ closeModal, confirmAction, isVisible, itemId, question }) => {
  const dispatch = useDispatch()

  const removeHandler = () => {
    if (itemId) {
      dispatch(removeItem(itemId))
    } else {
      dispatch(clearItems())
    }
    confirmAction()
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      <div className={s.modalCover} onClick={closeModal}></div>
      <div className={s.modalContainer}>
        <div className={s.modalTitle}>
          <h3>Подтвердите действие</h3>
          <span className={s.modalClose} onClick={closeModal}>
            <img alt={'Close'} src={closeImg} />
          </span>
        </div>
        <div className={s.modalQuestion}>{question}</div>
        <div className={s.modalBtnBlock}>
          <ReturnButton />
          <div className={s.remove} onClick={removeHandler}>
            <Icon
              fill={'white'}
              height={'20'}
              sprId={'trash'}
              viewBox={'0 0 512 512'}
              width={'26'}
            />
            Да
          </div>
        </div>
      </div>
    </>
  )
}
