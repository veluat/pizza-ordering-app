import React, { useState } from 'react'

import arrow from '@/assets/arrow-top.svg'
import { idGenerator } from '@/common/utils/idGenerator'

import s from './Sort.module.scss'

export const Sort: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const sortList = ['популярности', 'цене', 'алфавиту']
  const [selected, setSelected] = useState(0)
  const listItemHandler = (i: React.SetStateAction<number>) => {
    setSelected(i)
    setIsOpen(false)
  }

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        <div>
          <img
            alt={'arrow'}
            className={isOpen ? `${s.image} ${s.rotated}` : `${s.image}`}
            height={6}
            src={arrow}
            width={10}
          />
          <b>Сортировка по:</b>
        </div>
        <span onClick={() => setIsOpen(!isOpen)}>{sortList[selected]}</span>
      </div>
      {isOpen && (
        <div className={s.sort__popup}>
          <ul>
            {sortList.map((name, i) => (
              <li
                className={selected === i ? `${s.active}` : ''}
                key={idGenerator()}
                onClick={() => listItemHandler(i)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
