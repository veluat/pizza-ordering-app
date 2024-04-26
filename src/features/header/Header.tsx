import React from 'react'

import logo from '@/assets/logo.png'
import search_icon from '@/assets/search.png'
import { Icon } from '@/common/components/icon/Icon'

import s from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img alt={'Pizza logo'} height={'50'} src={logo} width={'50'} />
          <div>
            <p>на любой вкус и цвет</p>
            <h1>Pizza-ordering</h1>
            <p>лучше нашей пиццы нет</p>
          </div>
        </div>
        <div className={s.search}>
          <input className={s.searchInput} placeholder={'Search'} type={'text'} />
          <div className={s.seachIcon}>
            <img alt={'search'} src={search_icon} />
          </div>
        </div>
        <div className={s.header__cart}>
          <span>5500 ₽</span>
          <div className={s.button__cart}>
            <Icon fill={'none'} height={'18'} sprId={'cart'} viewBox={'0 0 18 18'} width={'18'} />
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}
