import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import SyncIcon from '@mui/icons-material/Sync'
import ForYou from './ForYou/ForYou'

const ProductDetails = () => {
  const size = ['SX', 'S', 'M', 'ML', 'XL']
  const [image, setImage] = useState(0) // Defaulting to first image for better UX
  const { id } = useParams()
  const AxiosSecure = useAxiosSecure()

  const { data: details = {} } = useQuery({
    queryKey: ['unique', id],
    queryFn: async () => {
      const res = await AxiosSecure(`/single-product-details/${id}`)
      return res.data
    },
  })

  const handelSize = (index) => {
    setImage(index) // Note: Keeping your logic where clicking size changes the image index
  }

  const { data: Category = [] } = useQuery({
    queryKey: ['forYou', details.category, details._id],
    enabled: !!details.category && !!details._id,
    queryFn: async () => {
      const res = await AxiosSecure(
        `/category-product?category=${details.category}&exclude=${details._id}`
      )
      return res.data
    },
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-12 gap-8">
        {/* LEFT: Thumbnails */}
        <div className="col-span-2 space-y-4">
          {details.myImage?.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setImage(index)}
              className={`bg-[#F5F5F5] rounded-md p-2 cursor-pointer transition-all border-2 ${
                image === index ? 'border-red-500' : 'border-transparent'
              }`}
            >
              <figure>
                <img
                  src={item}
                  alt="Thumbnail"
                  className="w-full h-20 object-contain mx-auto"
                />
              </figure>
            </div>
          ))}
        </div>

        {/* CENTER: Main Image Display */}
        <div className="bg-[#F5F5F5] rounded-lg flex justify-center items-center col-span-5 p-10 min-h-[500px]">
          <figure className="w-full">
            <img
              src={details.myImage?.[image]}
              alt={details.name}
              className="mx-auto max-h-[400px] object-contain transition-all duration-300"
            />
          </figure>
        </div>

        {/* RIGHT: Product Details Info */}
        <div className="col-span-5 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              {details.name}
            </h1>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {details.price} Taka
              </h2>
              <span className="text-green-600 text-sm font-medium">
                In Stock
              </span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {details.description ||
              'Experience premium quality with our latest collection.'}
          </p>

          <hr className="border-gray-300" />

          {/* Size Selector */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Size:</h3>
            <div className="flex flex-row items-center gap-3">
              {size.map((item, index) => (
                <ReusableButton
                  onClick={() => handelSize(index)}
                  key={index}
                  text={item}
                  sx={{
                    border: 1,
                    minWidth: '45px',
                    height: '40px',
                    borderRadius: '4px',
                    borderColor: image === index ? '#DB4444' : '#ccc',
                    backgroundColor:
                      image === index ? '#DB4444' : 'transparent',
                    color: image === index ? 'white' : 'black',
                    '&:hover': {
                      backgroundColor: image === index ? '#DB4444' : '#f0f0f0',
                    },
                  }}
                ></ReusableButton>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="flex-1">
              <ReusableButton
                text="Buy Now"
                variant="contained"
                sx={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: '#DB4444',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#C13B3B' },
                }}
              ></ReusableButton>
            </div>
            <IconButton
              sx={{
                border: 1,
                borderColor: '#ccc',
                borderRadius: '4px',
                width: '50px',
              }}
              color="inherit"
            >
              <FavoriteBorderIcon />
            </IconButton>
          </div>

          {/* Delivery & Return Info Box */}
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="flex gap-4 p-4 items-center hover:bg-gray-50 transition-colors">
              <img
                src="https://i.ibb.co.com/4ygvtm9/icon-delivery.png"
                alt="delivery"
                className="w-10 h-10"
              />
              <div>
                <h4 className="font-bold text-sm">Free Delivery</h4>
                <p className="text-xs underline cursor-pointer font-medium">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="border-b border-gray-300"></div>
            <div className="flex gap-4 p-4 items-center hover:bg-gray-50 transition-colors">
              <SyncIcon className="text-3xl" />
              <div>
                <h4 className="font-bold text-sm">Return Delivery</h4>
                <p className="text-xs">
                  Free 30 Days Delivery Returns.{' '}
                  <span className="underline cursor-pointer font-medium">
                    Details
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <h2 className="text-2xl font-bold">Related Items</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Category.map((item, index) => (
            <ForYou item={item} key={index}></ForYou>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
