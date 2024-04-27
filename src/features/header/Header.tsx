import React from 'react'

import { HeaderCartButton } from '@/common/components/header-cart-button/HeaderCartButton'
import { Logo } from '@/common/components/logo/Logo'
import { Search } from '@/common/components/search/Search'

import s from './Header.module.scss'

export const Header: React.FC<{ searchValue: string; setSearchValue: (event: string) => void }> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <HeaderCartButton />
      </div>
    </div>
  )
}
