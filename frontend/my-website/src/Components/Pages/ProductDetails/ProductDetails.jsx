import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import SyncIcon from '@mui/icons-material/Sync'
const ProductDetails = () => {
  const size = ['SX', 'S', 'M', 'ML', 'XL']
  const [image, setImage] = useState(2)
  const { id } = useParams()
  const AxiosSecure = useAxiosSecure()
  const { data: details = {} } = useQuery({
    queryKey: ['unique'],
    queryFn: async () => {
      const res = await AxiosSecure(`/single-product-details/${id}`)
      return res.data
    },
  })
  console.log(details)

  const handelSize = (id) => {
    setImage(id)
  }

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2 ">
        {details.myImage?.map((item, index) => (
          <div key={index} className="bg-[#F5F5F5] mt-3 p-3 ">
            <figure>
              <img src={item} alt="" className="mx-auto" />
            </figure>
          </div>
        ))}
      </div>
      <div className="bg-[#F5F5F5] flex justify-center items-center col-span-5">
        <div className="">
          <figure>
            <img
              src={details.myImage?.[image]}
              alt=""
              className="mx-auto h-full "
            />
          </figure>
        </div>
      </div>
      <div className=" col-span-5">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">{details.name}</h1>
          <h1 className="text-2xl font-bold">{details.price} Taka</h1>
          <p className="text-xl">{details.description}</p>
          <div className="border-b-2 border-gray-400"></div>
          <div className="flex flex-row items-center gap-2">
            <h1 className=" font-bold">Size:</h1>
            {size.map((item, index) => (
              <ReusableButton
                onClick={() => handelSize(index)}
                key={index}
                text={item}
                sx={{
                  border: 1,
                  mr: 1,
                  backgroundColor: image == index ? 'black' : '',
                }}
              ></ReusableButton>
            ))}
          </div>
          <div className="flex gap-3">
            <ReusableButton text="Buy Now" variant="contained"></ReusableButton>
            <IconButton sx={{ border: 1 }} color="primary">
              <FavoriteBorderIcon />
            </IconButton>
          </div>

          <div className="border-2">
            <div className="flex gap-3 items-center">
              <figure>
                <img
                  src="https://i.ibb.co.com/4ygvtm9/icon-delivery.png"
                  alt=""
                  className=""
                />
              </figure>
              <div className="">
                <h1 className="">Free Delivery</h1>
                <h1 className="underline">
                  Enter your postal code for Delivery Availability
                </h1>
              </div>
            </div>
            <div className="border-b-2"></div>
            <div className="flex gap-3 items-center">
              <div className="">
                <SyncIcon></SyncIcon>
              </div>
              <div className="">
                <h1 className="">Return Delivery</h1>
                <h1 className="">
                  Free 30 Days Delivery Returns. <span className='underline'>Details</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
