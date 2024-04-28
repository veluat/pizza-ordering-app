import React from 'react'

import { SearchContext } from '@/App'
import close_icon from '@/assets/close.svg'
import search_icon from '@/assets/search.svg'

import s from './Search.module.scss'

export const Search: React.FC = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)

  return (
    <div className={s.search}>
      <input
        className={s.searchInput}
        onChange={event => setSearchValue(event.target.value)}
        placeholder={'Поиск пиццы...'}
        type={'text'}
        value={searchValue}
      />
      <img alt={'search'} className={s.searchIcon} height={24} src={search_icon} />
      {searchValue && (
        <img
          alt={'close'}
          className={s.clearIcon}
          height={24}
          onClick={() => setSearchValue('')}
          src={close_icon}
        />
      )}
    </div>
  )
}
