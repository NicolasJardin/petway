import { createContext, ReactNode, useEffect, useState } from 'react'
import { app } from 'services/firebase/firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type UserType = {
  id: string
  name: string
  avatar?: string
}

type AuthContextType = {
  user: UserType | undefined
  signInWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserType>()
  const instance = getAuth(app)

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(instance, provider)

      if (result.user) {
        const { displayName, photoURL, uid } = result.user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    } catch (e) {}
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(instance, user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [instance])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>{props.children}</AuthContext.Provider>
  )
}
