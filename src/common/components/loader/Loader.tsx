import React from 'react'

import s from './Loader.module.scss'

export const Loader: React.FC = () => {
  return (
    <div className={s.spinnerBox}>
      <div className={s.pulseContainer}>
        <div className={s.pulseBubble1}></div>
        <div className={s.pulseBubble2}></div>
        <div className={s.pulseBubble3}></div>
      </div>
    </div>
  )
}
