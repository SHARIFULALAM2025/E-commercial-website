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
import { Link } from 'react-router'
const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (event) => {
    event.preventDefault()
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 place-content-center items-center">
      <div className="">
        <img
          src="https://i.ibb.co.com/dJ4d1sxw/dl-beatsnoop-1.png"
          alt=""
          className=""
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <h1 className="text-[#000000] text-xl md:text-2xl font-semibold">
            Create an account
          </h1>
          <h1 className="text-[#000000] text-xs font-semibold">
            Enter your details below
          </h1>
          <div className="">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Name
              </InputLabel>
              <Input id="standard-adornment-password" type="text" />
            </FormControl>
          </div>
          <div className="">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Phone Number
              </InputLabel>
              <Input id="standard-adornment-password" type="number" />
            </FormControl>
          </div>
          <div className="">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Email
              </InputLabel>
              <Input id="standard-adornment-password" type="email" />
            </FormControl>
          </div>
          <div className="">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="flex justify-center items-center">
            <div className="space-y-3">
              <div className="">
                {' '}
                <ReusableButton
                  text="Create Account"
                  sx={{ width: '35ch' }}
                  variant="contained"
                ></ReusableButton>
              </div>
              <Social></Social>
            </div>
          </div>
          <h1 className="text-center text-[#000000] text-xs md:text-base font-semibold">
            Already have account?
            <Link to="/login">
              <span className="underline text-green-600">Log in</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Register
