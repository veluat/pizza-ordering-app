import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import arrow from '@/assets/arrow-top.svg'
import { idGenerator } from '@/common/utils/idGenerator'
import { setSort } from '@/redux/filter/filterSlice'
import { SortPropertyEnum, SortType } from '@/redux/filter/types'

import s from './SortPopup.module.scss'

export const list: SortItem[] = [
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'цене (сначала дешевле)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'цене (сначала дороже)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'алфавиту (от А до Я)', sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: 'алфавиту (от Я до А)', sortProperty: SortPropertyEnum.TITLE_DESC },
]

export const SortPopup: React.FC<SortPopupProps> = memo(({ value }) => {
  const dispatch = useDispatch()
  const sortRef = React.useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const listItemHandler = (obj: SortItem) => {
    dispatch(setSort(obj))
    setIsOpen(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className={s.sort} ref={sortRef}>
      <div className={s.sort__label}>
        <div className={s.sort__img}>
          <img
            alt={'arrow'}
            className={isOpen ? `${s.image} ${s.rotated}` : `${s.image}`}
            height={6}
            src={arrow}
            width={10}
          />
          <b>Сортировка по:</b>
        </div>
        <span onClick={() => setIsOpen(!isOpen)}>{value.name}</span>
      </div>
      {isOpen && (
        <div className={s.sort__popup}>
          <ul>
            {list.map(obj => (
              <li
                className={value.sortProperty === obj.sortProperty ? `${s.active}` : ''}
                key={idGenerator()}
                onClick={() => listItemHandler(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})

type SortItem = {
  name: string
  sortProperty: SortPropertyEnum
}

type PopupClick = {
  path: Node[]
} & MouseEvent

type SortPopupProps = {
  value: SortType
}
