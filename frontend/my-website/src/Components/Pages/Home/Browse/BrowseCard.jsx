import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from 'react-router'
import { IconButton, Tooltip } from '@mui/material'

const BrowseCard = ({ item }) => {
  const navigate = useNavigate()

  const handleView = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative bg-[#F5F5F5] rounded-md h-[250px] flex items-center justify-center overflow-hidden transition-all duration-300">
        {/* Discount Badge (Optional logic) */}
        {item.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
            -{item.discount}%
          </div>
        )}

        <figure className="p-10 transition-transform duration-500 group-hover:scale-110">
          <img
            src={item.myImage[0]}
            alt={item.name}
            className="h-40 w-full object-contain"
          />
        </figure>

        {/* Floating Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <Tooltip title="Add to Wishlist" placement="left">
            <IconButton
              sx={{
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#f3f4f6' },
              }}
              size="small"
            >
              <FavoriteBorderIcon fontSize="small" className="text-black" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Quick View" placement="left">
            <IconButton
              onClick={() => handleView(item._id)}
              sx={{
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#f3f4f6' },
              }}
              size="small"
            >
              <VisibilityIcon fontSize="small" className="text-black" />
            </IconButton>
          </Tooltip>
        </div>

        {/* Add to Cart Slide-up */}
        <button className="absolute bottom-0 w-full bg-black text-white py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
          <ShoppingCartOutlinedIcon fontSize="small" />
          Add To Cart
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-1">
        <h3 className="font-semibold text-base truncate group-hover:text-red-500 transition-colors">
          {item.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-bold">${item.price}</span>
          {item.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${item.oldPrice}
            </span>
          )}
        </div>

        {/* Rating Placeholder (Optional but professional) */}
        <div className="flex items-center gap-1">
          <div className="text-yellow-400 text-sm">★★★★★</div>
          <span className="text-gray-400 text-xs font-semibold">(88)</span>
        </div>
      </div>
    </div>
  )
}

export default BrowseCard
