import React from 'react'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../Authentication/AuthContext'
import { saveUser } from '../../ReusableComponent/ReusableUploadImage'
import { useNavigate } from 'react-router'

const Social = () => {
  const { googleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const handelSocialLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user
        saveUser({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
        navigate('/')
        console.log(user)
      })
      .catch((error) => {
        const ErrorCode = error.code
        const ErrorMessage = error.message
        console.log(ErrorCode, ErrorMessage)
      })
  }

  return (
    <div>
      <ReusableButton
        onClick={handelSocialLogin}
        startIcon={<FcGoogle></FcGoogle>}
        sx={{ width: '40ch' }}
        variant="contained"
        text="Sign up with Google"
        color="success"
      ></ReusableButton>
    </div>
  )
}

export default Social
