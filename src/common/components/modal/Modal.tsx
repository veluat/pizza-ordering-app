import React from 'react'
import { useDispatch } from 'react-redux'

import closeImg from '@/assets/close.svg'
import { Icon } from '@/common/components/icon/Icon'
import { ReturnBack } from '@/common/components/return-back/ReturnBack'
import { clearItems } from '@/redux/cart/CartSlice'

import s from './Modal.module.scss'

export const Modal: React.FC<{
  closeModal: () => void
  confirmAction: () => void
  isVisible: boolean
  question: string
}> = ({ closeModal, confirmAction, isVisible, question }) => {
  const dispatch = useDispatch()

  const removeHandler = () => {
    dispatch(clearItems())
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
          <ReturnBack />
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
