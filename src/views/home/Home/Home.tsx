import { useAuth } from 'contexts/AuthContext/useAuth'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { petRoute } from 'routes/petRoute'

const Home = () => {
  const { user } = useAuth()

  const navigate = useNavigate()

  if (!user) navigate('auth/login')

  navigate(petRoute.items.adoption.path)

  return <Fragment></Fragment>
}

export default Home
