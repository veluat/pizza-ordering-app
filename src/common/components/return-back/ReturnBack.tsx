import React from 'react'
import { Link } from 'react-router-dom'

import s from './ReturnBack.module.scss'

export const ReturnBack: React.FC = () => {
  return (
    <Link
      className={s.returnBack}
      onClick={() => {
        window.scroll(0, 0)
      }}
      to={'/'}
    >
      <span>Вернуться назад</span>
    </Link>
  )
}
