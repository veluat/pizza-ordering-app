import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { HeaderCartButton } from '@/common/components/header-cart-button/HeaderCartButton'
import { Logo } from '@/common/components/logo/Logo'
import { Search } from '@/common/components/search/Search'
import { selectCart } from '@/redux/cart/selectors'

import s from './Header.module.scss'

export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart)
  const location = useLocation()
  const isMounted = React.useRef(false)

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)

      localStorage.setItem('cart', json)
    }
    isMounted.current = true
  }, [items])

  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        {location.pathname !== '/cart' && <Search />}
        {location.pathname !== '/cart' && (
          <HeaderCartButton totalCount={totalCount} totalPrice={totalPrice} />
        )}
      </div>
    </div>
  )
}
