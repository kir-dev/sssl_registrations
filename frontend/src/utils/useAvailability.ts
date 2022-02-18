import { useEffect, useState } from 'react'
import axios from 'axios'
import { AvailableDTO } from '../types/AvailableDTO'
import { Configuration } from './configuration'

export function useAvailability() {
  const [available, setAvailable] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()
  useEffect(() => {
    axios
      .get<AvailableDTO>(Configuration.API_URL + '/available')
      .then((res) => {
        setAvailable(res.data.open === 'true')
      })
      .catch(() => {
        setError('Nem sikerült lekérni a jelentkezés elérhetőségét!')
      })
      .finally(() => {
        setLoading(false)
      })
  })
  return { available, loading, error }
}
