import React from 'react'
import { Link } from 'react-router-dom'

import { Icon } from '@/common/components/icon/Icon'

import s from './HeaderCartButton.module.scss'

export const HeaderCartButton: React.FC = () => {
  return (
    <Link className={s.header__cart} to={'/cart'}>
      <span>5500 ₽</span>
      <div className={s.button__cart}>
        <Icon fill={'none'} height={'18'} sprId={'cart'} viewBox={'0 0 18 18'} width={'18'} />
        <span>4</span>
      </div>
    </Link>
  )
}
