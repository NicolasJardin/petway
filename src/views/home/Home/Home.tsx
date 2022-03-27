import { useAuth } from 'contexts/AuthContext/useAuth'
import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { petRoute } from 'routes/petRoute'

const Home = () => {
  const { user } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) return navigate('auth/login')

    navigate(petRoute.items.adoption.path)
  }, [user, navigate])

  return <Fragment></Fragment>
}

export default Home
