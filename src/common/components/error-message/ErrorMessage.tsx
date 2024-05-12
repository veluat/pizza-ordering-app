import React from 'react'

import s from './ErrorMessage.module.scss'

export const ErrorMessage: React.FC = () => {
  return (
    <div className={s.content__error}>
      <h2>Произошла ошибка 😕</h2>
      <p>Попробуйте повторить попытку позже.</p>
    </div>
  )
}
