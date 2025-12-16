import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from './Firebase.init'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user);

  const [theme, setTheme] = useState('light')
  /* set loading */
  const [loading, setLoading] = useState(true)
  /*create user means  register/signup   */
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  /* signin/login user */
  const loginInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  /* logout user */
  const LogOut = () => {
    return signOut(auth)
  }
  /* forgat password */
  const handelForgatPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  /* set user */
  const updateUserImageProfile = (name, myImage) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: myImage,

    })
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])
  const AuthInfo = {
    theme,
    setTheme,
    user,
    setUser,
    loading,
    createUser,
    updateUserImageProfile,
    loginInUser,
    LogOut,
    handelForgatPassword,
  }

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
