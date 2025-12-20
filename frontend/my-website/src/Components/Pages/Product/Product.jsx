import React from 'react'


import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { category } from '../DashboardLink'
import Tooltip from '@mui/material/Tooltip'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { useForm } from 'react-hook-form'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import { uploadImage } from '../../ReusableComponent/ReusableUploadImage'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import toast from 'react-hot-toast'
const Product = () => {

  const AxiosSecure = useAxiosSecure()
  const { register, handleSubmit ,reset} = useForm()
  const handelProduct = async (data) => {
    console.log('button click', data)

    try {
      const { name, image, price, category, description } = data
      const imageArray = Array.from(image)
      const myImage = await Promise.all(
        imageArray.map((img) => uploadImage(img))
      )

      const productInfo = { name, price, category, myImage, description }
      const result = await AxiosSecure.post(
        `${import.meta.env.VITE_serverBaseUrl}/all-product`,
        productInfo
      )
      if (result.data.insertedId) {
        toast.success('successfully added')
        reset()
      }
    } catch (error) {
      const Message = error.Message
      toast.error(Message)
    }
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit(handelProduct)} className="">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {' '}
          <div className="">
            <FormControl
              sx={{
                m: 1,
                width: '36ch',
              }}
              variant="standard"
            >
              <InputLabel sx={{}}>Product Name:</InputLabel>
              <Input type="text" {...register('name')} />
            </FormControl>
          </div>
          <div className="">
            <FormControl
              sx={{
                m: 1,
                width: '36ch',
              }}
              variant="standard"
            >
              <InputLabel>Price:</InputLabel>
              <Input
                type="number"
                {...register('price', { valueAsNumber: true })}
              />
            </FormControl>
          </div>
          <div className="">
            <FormControl variant="standard" sx={{ m: 1, width: '36ch' }}>
              <InputLabel>Category</InputLabel>
              <Select
                {...register('category')}
                labelId="demo-simple-select-standard-label"
                defaultValue=""
                label="Category"
              >
                {category.map((item, index) => (
                  <MenuItem value={item.replace(/\s+/g, '')} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-3 ">
            <FormControl
              sx={{
                m: 1,
                width: '36ch',
              }}
              variant="standard"
            >
              <Tooltip title="Chose Your Image." arrow>
                <Input
                  {...register('image')}
                  type="file"
                  inputProps={{ multiple: true }}
                  accept="image/*"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton>
                        <CloudUploadIcon sx={{}}></CloudUploadIcon>
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Tooltip>
            </FormControl>
          </div>
        </div>
        <div className="">
          {' '}
          <div className="">
            <Box sx={{ width: '100%' }}>
              <TextField
                {...register('description')}
                sx={{}}
                fullWidth
                minRows={10}
                multiline
                label="product description"
                id="fullWidth"
              />
            </Box>
          </div>
        </div>
        <div className="flex justify-center md:mt-5">
          {' '}
          <ReusableButton
            type="submit"
            text="Add Product"
            variant="contained"
          ></ReusableButton>
        </div>
      </form>
    </div>
  )
}

export default Product
