import React from 'react'

import minus_icon from '@/assets/minus.svg'
import plus_icon from '@/assets/plus.svg'

import s from './IncDecButtons.module.scss'

type IncDecButtonsProps = {
  count: number
  onClickMinus: () => void
  onClickPlus: () => void
}
export const IncDecButtons: React.FC<IncDecButtonsProps> = ({
  count,
  onClickMinus,
  onClickPlus,
}) => {
  return (
    <div className={s.cart__itemCount}>
      <button className={s.cart__itemMinus} disabled={count === 0} onClick={onClickMinus}>
        <img alt={'minus'} className={s.clearIcon} height={22} src={minus_icon} />
      </button>
      <b>{count}</b>
      <button className={s.cart__itemPlus} onClick={onClickPlus}>
        <img alt={'plus'} className={s.clearIcon} height={22} src={plus_icon} />
      </button>
    </div>
  )
}
