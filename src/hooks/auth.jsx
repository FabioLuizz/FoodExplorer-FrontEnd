import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [isAdmin, setAdmin] = useState(false)

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      location.reload()

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      if (user.email === 'admin@admin.com') {
        localStorage.setItem('@foodexplorer:isAdmin', true)
      }

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel entrar')
      }
    }
  }

  function logout() {
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:isAdmin')
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    const token = localStorage.getItem('@foodexplorer:token')
    const isAdmin = localStorage.getItem('@foodexplorer:isAdmin')

    if (isAdmin) {
      setAdmin(true)
    }

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, logout, user: data.user, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
