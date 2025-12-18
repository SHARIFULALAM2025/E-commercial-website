import React, { useContext } from 'react'
import { AuthContext } from '../../Authentication/AuthContext'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { useNavigate } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()
  const handelCancel = () => {
    navigate('/')
  }
  const { user, theme, } = useContext(AuthContext)

  return (
    <div className="dark:bg-black">
      <div className=" dark:bg-black rounded shadow-xl p-3">
        <div className="flex justify-end">
          <div className="">
            <h1 className="dark:text-white">
              Welcome!{' '}
              <span className="text-[#DB4444] font-bold">{user?.displayName}.</span>
            </h1>
            <h1 className="dark:text-white">
              <MailOutlineIcon
                sx={{ color: theme == 'dark' ? 'white' : 'black' }}
              ></MailOutlineIcon>
              {user?.email}
            </h1>
          </div>
        </div>
        <form className="space-y-2">
          <div className="md:flex md:flex-row flex-col justify-between">
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
                <InputLabel sx={{}} >
                  Name
                </InputLabel>
                <Input type="text" />
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
                <InputLabel >
                  Phone Number
                </InputLabel>
                <Input  type="number" />
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
                <InputLabel >
                  Email
                </InputLabel>
                <Input  type="email" />
              </FormControl>
            </div>
          </div>
          <div className="">
            <Box sx={{ width: '100%' }}>
              <TextField
                sx={{
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
                fullWidth
                minRows={10}
                multiline
                label="Your Address"
                id="fullWidth"
              />
            </Box>
          </div>
          <div className="flex justify-end gap-3 items-end">
            <ReusableButton
              onClick={handelCancel}
              text="Cancel"
              variant="contained"
            ></ReusableButton>
            <ReusableButton
              text="forgat password"
              variant="contained"
            ></ReusableButton>
            <ReusableButton
              text="update profile"
              variant="contained"
            ></ReusableButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
