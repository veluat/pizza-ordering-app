import React from 'react'

import { Icon } from '@/common/components/icon/Icon'
import { Logo } from '@/common/components/logo/Logo'

import s from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.logoBlock}>
        <Logo />
        <div className={s.text}>
          <span>График работы доставки: 10:00–02:00</span>
          <span>Внешний вид продукта может отличаться от рекламного изображения.</span>
        </div>
        <div className={s.call}>
          <Icon fill={'#f49f16'} height={'50'} sprId={'call'} viewBox={'0 0 64 64'} width={'50'} />
          <p>555</p>
        </div>
      </div>
      <small>© 2024 PIZZA-ORDERING</small>
    </div>
  )
}
