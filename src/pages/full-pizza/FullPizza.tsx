import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://662aa7afd3f63c12f45850dc.mockapi.io/items/' + id)

        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении пиццы!')
        navigate('/')
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) {
    return <>Загрузка...</>
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
