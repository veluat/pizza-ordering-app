import { Pizza, SearchPizzaParams } from '@/redux/pizza/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import identity from 'lodash.identity'
import pickBy from 'lodash.pickby'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async params => {
    const { category, currentPage, order, search, sortBy } = params

    const { data } = await axios.get<Pizza[]>(`https://662aa7afd3f63c12f45850dc.mockapi.io/items`, {
      params: pickBy(
        {
          category,
          limit: 8,
          order,
          page: currentPage,
          search,
          sortBy,
        },
        identity
      ),
    })

    return data
  }
)
