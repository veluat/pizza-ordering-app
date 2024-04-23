import { Header } from '@/features/header/Header'
import { Pagination } from '@/features/layot/pagination/Pagination'
import { PizzaSection } from '@/features/layot/pizza-section/PizzaSection'
import { SortBlock } from '@/features/layot/sort-block/SortBlock'

import s from '@/App.module.scss'

export function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <SortBlock />
      <PizzaSection />
      <Pagination />
    </div>
  )
}
