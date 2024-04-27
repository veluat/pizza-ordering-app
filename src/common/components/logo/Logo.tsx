import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'

import s from './Logo.module.scss'

export const Logo: React.FC = () => {
  return (
    <Link
      className={s.logo}
      onClick={() => {
        window.scroll(0, 0)
      }}
      to={'/'}
    >
      <img alt={'Pizza logo'} height={'50'} src={logo} width={'50'} />
      <div>
        <p>на любой вкус и цвет</p>
        <h1>Pizza-ordering</h1>
        <p>пиццерии лучше нет</p>
      </div>
    </Link>
  )
}
