import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ErrorMessage } from '@/common/components/error-message/ErrorMessage'
import { Loader } from '@/common/components/loader/Loader'
import { ReturnButton } from '@/common/components/return-button/ReturnButton'
import axios from 'axios'

import s from './FullPizza.module.scss'

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    description: string
    imageUrl: string
    title: string
  }>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const { id } = useParams()

  useEffect(() => {
    async function fetchPizza() {
      setLoading(true)
      try {
        const { data } = await axios.get('https://662aa7afd3f63c12f45850dc.mockapi.io/items/' + id)

        setPizza(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [id])

  if (loading) {
    return (
      <div className={s.errorBlock}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={s.errorBlock}>
        <ErrorMessage />
        <ReturnButton />
      </div>
    )
  }

  return (
    <div className={s.fullPizzaContent}>
      <img alt={'pizza'} src={pizza?.imageUrl} />
      <div className={s.message}>
        <h2>{pizza?.title}</h2>
        <h2>Состав:</h2>
        <h3>{pizza?.description}</h3>
      </div>
      <ReturnButton />
    </div>
  )
}

export default FullPizza
