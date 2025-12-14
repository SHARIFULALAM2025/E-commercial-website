import React from 'react'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import { useContext } from 'react'
import { AuthContext } from '../../Authentication/AuthContext'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import SendIcon from '@mui/icons-material/Send'
const Contact = () => {
  const { theme } = useContext(AuthContext)
  return (
    <div className="grid md:grid-cols-12 gap-8 dark:bg-black">
      <div className="col-span-2 p-3 space-y-3 shadow-xl rounded dark:bg-black">
        <div className="flex gap-2 ">
          <h1 className="">
            <PermPhoneMsgIcon
              sx={{ color: theme == 'dark' ? 'white' : 'black' }}
            ></PermPhoneMsgIcon>
          </h1>
          <p className="dark:text-white">Call To Us</p>
        </div>
        <h1 className="dark:text-white">
          We are available 24/7, 7 days a week.
        </h1>
        <p className="dark:text-white">Phone: +8801611112222</p>
        <div className="border-t-2"></div>
        <div className="flex gap-2">
          <h1 className="">
            <MailOutlineIcon
              sx={{ color: theme == 'dark' ? 'white' : 'black' }}
            ></MailOutlineIcon>
          </h1>
          <p className="dark:text-white">Write To US</p>
        </div>
        <h1 className="dark:text-white">
          Fill out our form and we will contact you within 24 hours.
        </h1>
        <p className="dark:text-white">Emails: customer@exclusive.com</p>
        <p className="dark:text-white">Emails: support@exclusive.com</p>
      </div>
      <div className="col-span-10 dark:bg-black rounded shadow-xl p-3">
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
                <InputLabel sx={{}} htmlFor="standard-adornment-password">
                  Name
                </InputLabel>
                <Input id="standard-adornment-password" type="text" />
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
                <Input id="standard-adornment-password" type="number" />
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
                <Input id="standard-adornment-password" type="email" />
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
                label="Message"
                id="fullWidth"
              />
            </Box>
          </div>
          <div className="flex justify-end items-end">
            <ReusableButton
              endIcon={<SendIcon></SendIcon>}
              text="Send Massage"
              variant="contained"
            ></ReusableButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
