import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export const useAuth = () => {
  const { signInWithGoogle, user } = useContext(AuthContext)

  return {
    signInWithGoogle,
    user
  }
}
