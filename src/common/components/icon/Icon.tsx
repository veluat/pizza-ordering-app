import React from 'react'

import iconSprite from '@/assets/sprite/sprite.svg'

import s from './Icon.module.scss'

export const Icon: React.FC<IconPropsType> = ({ fill, height, sprId, viewBox, width }) => {
  return (
    <svg
      className={s.iconSvg}
      fill={fill}
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconSprite}#${sprId}`} />
    </svg>
  )
}

type IconPropsType = {
  fill: string
  height: string
  sprId: string
  viewBox: string
  width: string
}
