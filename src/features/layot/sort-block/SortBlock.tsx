import React from 'react'

import { Categories, Sort } from '@/common/components'

import s from './SortBlock.module.scss'

export const SortBlock: React.FC = () => {
  return (
    <div className={s.sortBlock}>
      <Categories />
      <Sort />
    </div>
  )
}
