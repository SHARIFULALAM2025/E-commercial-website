import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
  const {user,setUser}=useState(null)
  const [theme, setTheme] = useState('light')
  const AuthInfo = { theme, setTheme, user, setUser }

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
