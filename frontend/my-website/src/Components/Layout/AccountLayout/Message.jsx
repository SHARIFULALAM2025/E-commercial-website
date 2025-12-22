import IconButton from '@mui/material/IconButton'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
const Message = ({ item, refetch }) => {
  const AxiosSecure = useAxiosSecure()

  const { mutateAsync: deleteMessage } = useMutation({
    mutationFn: async (id) => {
      const res = await AxiosSecure.delete(`/feedBack/${id}`)
      return res.data
    },

    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        toast.success('message delete successfully')
      }
    },
  })

  const handelDelete = async (id) => {
    await deleteMessage(id)
    refetch()
  }
  return (
    <div>
      <div className="p-5 border rounded relative">
        <h1 className="">Date and Time:{item.createAt}</h1>
        <h1 className="">customer email:{item.email}</h1>
        <h1 className="">customer number:{item.number}</h1>
        <p className="">description:{item.message}</p>
        <div className="absolute top-0 right-0">
          <IconButton
            onClick={() => handelDelete(item._id)}
            sx={{ backgroundColor: 'black' }}
            aria-label="delete"
            size="small"
          >
            <DeleteIcon sx={{ color: 'red' }} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Message
