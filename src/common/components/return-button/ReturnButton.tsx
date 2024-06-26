import React from 'react'
import { Link } from 'react-router-dom'

import { Icon } from '@/common/components/icon/Icon'

import s from './ReturnButton.module.scss'

export const ReturnButton: React.FC = () => {
  return (
    <Link
      className={s.returnBack}
      onClick={() => {
        window.scroll(0, 0)
      }}
      to={'/'}
    >
      <Icon
        fill={'#000000'}
        height={'21'}
        sprId={'arrow-left'}
        viewBox={'0 0 64 64'}
        width={'21'}
      />
      <span>Назад</span>
    </Link>
  )
}
