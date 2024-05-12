import React from 'react'
import { useParams } from 'react-router-dom'

import { ErrorMessage } from '@/common/components/error-message/ErrorMessage'
import { Loader } from '@/common/components/loader/Loader'
import { ReturnBack } from '@/common/components/return-back/ReturnBack'
import axios from 'axios'

import s from './FullPizza.module.scss'

export const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    description: string
    imageUrl: string
    title: string
  }>()

  const { id } = useParams()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://662aa7afd3f63c12f45850dc.mockapi.io/items/' + id)

        setPizza(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) {
    return (
      <div className={s.errorBlock}>
        <Loader />
        <ErrorMessage />
        <ReturnBack />
      </div>
    )
  }

  return (
    <div className={s.fullPizzaContent}>
      <img alt={'pizza'} src={pizza.imageUrl} />
      <div className={s.message}>
        <h2>{pizza.title}</h2>
        <h2>Состав:</h2>
        <h3>{pizza.description}</h3>
      </div>
      <ReturnBack />
    </div>
  )
}
