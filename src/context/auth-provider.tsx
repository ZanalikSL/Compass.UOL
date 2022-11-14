import React, { useState } from 'react'
import { fakeAuthProvider } from './auth'

export interface AuthContextType {
  authState: any
  signin: (user: string, password: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
  })

  let signin = (
    newUser: string,
    newPassword: string,
    callback: VoidFunction
  ) => {
    if (newUser === 'admin' && newPassword === 'admin') {
      return fakeAuthProvider.signin(() => {
        localStorage.setItem('user', newUser)
        localStorage.setItem('password', newPassword)
        setAuthState((prevState) => ({
          ...prevState,
          isAuthenticated: true,
        }))

        callback()
      })
    } else {
      throw new Error('Error signin')
    }
  }

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      localStorage.setItem('user', '')
      localStorage.setItem('password', '')
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
      }))

      callback()
    })
  }

  let value = { authState, setAuthState, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export let AuthContext = React.createContext<AuthContextType>(null!)

export function useAuth() {
  return React.useContext(AuthContext)
}
