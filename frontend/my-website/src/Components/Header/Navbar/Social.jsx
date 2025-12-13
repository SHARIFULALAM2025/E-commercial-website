import React from 'react'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import { FcGoogle } from 'react-icons/fc'

const Social = () => {
  return (
    <div>
      <ReusableButton
        startIcon={<FcGoogle></FcGoogle>}
        sx={{ width: '35ch' }}
        variant="contained"
              text="Sign up with Google"
              color="success"
      ></ReusableButton>
    </div>
  )
}

export default Social
