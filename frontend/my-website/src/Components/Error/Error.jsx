import React from 'react'
import ReusableButton from '../ReusableComponent/ReusableButton'
import { useNavigate } from 'react-router'

const Error = () => {
  const navigate = useNavigate()
  const handelClick = () => {
    navigate('/')
  }
  return (
    <div className="flex justify-center items-center text-center">
      <div className="space-y-3 mt-6">
        <h1 className="text-4xl">404 Not Found</h1>
        <p className="">Your visited page not found. You may go home page.</p>
        <ReusableButton
          onClick={handelClick}
          variant="contained"
          text="Back to home page"
        ></ReusableButton>
      </div>
    </div>
  )
}

export default Error
