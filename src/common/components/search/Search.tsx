import React from 'react'

import search_icon from '@/assets/search.png'

import s from './Search.module.scss'

export const Search: React.FC = () => {
  return (
    <div className={s.search}>
      <input className={s.searchInput} placeholder={'Search'} type={'text'} />
      <div className={s.seachIcon}>
        <img alt={'search'} src={search_icon} />
      </div>
    </div>
  )
}
