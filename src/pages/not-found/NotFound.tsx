import React from 'react'

import { ReturnButton } from '@/common/components/return-button/ReturnButton'

import s from './NotFound.module.scss'

const NotFound: React.FC = () => {
  return (
    <>
      <div className={s.notFoundBlock}>
        <span>😕</span>
        <h1>Ничего не найдено...</h1>
        <p className={s.description}>
          К сожалению, данная страница отсутствует в нашей интернет-пиццерии.
        </p>
      </div>
      <div className={s.returnBlock}>
        <ReturnButton />
      </div>
    </>
  )
}

export default NotFound
