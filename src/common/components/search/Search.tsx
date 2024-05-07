import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import close_icon from '@/assets/close.svg'
import search_icon from '@/assets/search.svg'
import { setSearchValue } from '@/redux/filter/filterSlice'
import debounce from 'lodash.debounce'

import s from './Search.module.scss'

export const Search: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState<string>('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str))
    }, 150),
    []
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={s.search}>
      <input
        className={s.searchInput}
        onChange={onChangeInput}
        placeholder={'Поиск пиццы...'}
        ref={inputRef}
        type={'text'}
        value={value}
      />
      <img alt={'search'} className={s.searchIcon} height={24} src={search_icon} />
      {value && (
        <img
          alt={'close'}
          className={s.clearIcon}
          height={24}
          onClick={onClickClear}
          src={close_icon}
        />
      )}
    </div>
  )
}
