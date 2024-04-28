import React from 'react'
import ReactPaginate from 'react-paginate'

import { Icon } from '@/common/components/icon/Icon'

import s from './Pagination.module.scss'

type PaginationProps = {
  currentPage: number
  onChangePage: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    breakLabel={'...'}
    className={s.paginationWrapper}
    forcePage={currentPage - 1}
    marginPagesDisplayed={2}
    nextLabel={
      <Icon
        fill={'#000000'}
        height={'25'}
        sprId={'arrow-right'}
        viewBox={'0 0 64 64'}
        width={'25'}
      />
    }
    onPageChange={event => onChangePage(event.selected + 1)}
    pageCount={3}
    pageRangeDisplayed={8}
    previousLabel={
      <Icon
        fill={'#000000'}
        height={'25'}
        sprId={'arrow-left'}
        viewBox={'0 0 64 64'}
        width={'25'}
      />
    }
    renderOnZeroPageCount={null}
  />
)
