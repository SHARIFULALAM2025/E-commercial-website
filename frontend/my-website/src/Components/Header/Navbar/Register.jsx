import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Input from '@mui/material/Input'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import Social from './Social'
import { Link, useNavigate } from 'react-router'
import Tooltip from '@mui/material/Tooltip'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useContext } from 'react'
import { AuthContext } from '../../Authentication/AuthContext'
import { useForm } from 'react-hook-form'
import {
  saveUser,
  uploadImage,
} from '../../ReusableComponent/ReusableUploadImage'
const Register = () => {
  const { theme, createUser, updateUserImageProfile } = useContext(AuthContext)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (event) => {
    event.preventDefault()
  }
  /* data collect using react hook form */
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const handelSignUp = async (data) => {
    const { image, email, password, name, number } = data
    const myImage = image[0]

    try {
      const uploadImage2 = await uploadImage(myImage)
      const result = await createUser(email, password)
      await updateUserImageProfile(name, uploadImage2)
      await saveUser({ email, name, image: uploadImage2, number })
      console.log(result, data)
      navigate('/')
      reset()
    } catch (error) {
      const ErrorMessage = error.message
      console.log(ErrorMessage)
      alert(ErrorMessage)
    }
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-30rem   place-content-center items-center">
      <div className="">
        <img
          src="https://i.ibb.co.com/dJ4d1sxw/dl-beatsnoop-1.png"
          alt=""
          className=" w-full object-cover h-full"
        />
      </div>
      <div className="flex justify-center items-center  md:h-full dark:bg-black dark:text-white">
        <div className="">
          <h1 className="text-[#000000] text-center text-xl md:text-2xl font-semibold dark:text-white ">
            Create an account
          </h1>
          <h1 className="text-[#000000] dark:text-white text-center text-xs font-semibold">
            Enter your details below
          </h1>
          <form onSubmit={handleSubmit(handelSignUp)}>
            <div className="">
              <FormControl
                sx={{
                  m: 1,
                  width: '36ch',

                  '& .MuiInputLabel-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInputBase-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                  },
                }}
                variant="standard"
              >
                <InputLabel sx={{}} htmlFor="standard-adornment-password">
                  Name
                </InputLabel>
                <Input {...register('name')} type="text" />
              </FormControl>
            </div>
            <div className="">
              <FormControl
                sx={{
                  m: 1,
                  width: '36ch',
                  '& .MuiInputLabel-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInputBase-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                  },
                }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Phone Number
                </InputLabel>
                <Input {...register('number')} type="number" />
              </FormControl>
            </div>
            <div className="">
              <FormControl
                sx={{
                  m: 1,
                  width: '36ch',
                  '& .MuiInputLabel-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInputBase-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                  },
                }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Email
                </InputLabel>
                <Input {...register('email')} type="email" />
              </FormControl>
            </div>
            <div className="">
              <FormControl
                sx={{
                  m: 1,
                  width: '36ch',
                  '& .MuiInputLabel-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInputBase-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                  },
                }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? 'hide the password'
                            : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? (
                          <Visibility
                            sx={{ color: theme == 'dark' ? 'white' : 'black' }}
                          />
                        ) : (
                          <VisibilityOff
                            sx={{ color: theme == 'dark' ? 'white' : 'black' }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>{' '}
            <div className="mb-3 ">
              <FormControl
                sx={{
                  m: 1,
                  width: '36ch',
                  '& .MuiInputLabel-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInputBase-root': {
                    color: theme === 'dark' ? 'white' : 'black',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: theme === 'dark' ? 'white' : 'black',
                  },

                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                  },
                }}
                variant="standard"
              >
                <Tooltip title="Chose Your Image." arrow>
                  <Input
                    {...register('image')}
                    onChange={(event) => console.log(event.target.files)}
                    type="file"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton>
                          <CloudUploadIcon
                            sx={{ color: theme == 'dark' ? 'white' : 'black' }}
                          ></CloudUploadIcon>
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Tooltip>
              </FormControl>
            </div>
            <div className="">
              <ReusableButton
                type="submit"
                text="Create Account"
                sx={{ width: '40ch' }}
                variant="contained"
              ></ReusableButton>
            </div>
          </form>
          <div className="space-y-2">
            <div className="mt-2">
              <Social></Social>
            </div>

            <h1 className=" text-[#000000] dark:text-white text-center text-xs md:text-base font-semibold">
              Already have account?
              <Link to="/login">
                <span className="underline text-green-600">Log in</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
