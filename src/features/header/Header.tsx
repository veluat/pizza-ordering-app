import React from 'react'

import { HeaderCartButton } from '@/common/components/header-cart-button/HeaderCartButton'
import { Logo } from '@/common/components/logo/Logo'
import { Search } from '@/common/components/search/Search'

import s from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <Search />
        <HeaderCartButton />
      </div>
    </div>
  )
}