import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router'
import { Tooltip } from '@mui/material'

const CategoryCard = ({ item }) => {
  const navigate = useNavigate()

  const handleView = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="group w-full transition-all duration-300">
      {/* Top Section: Image and Actions */}
      <div className="relative bg-[#F5F5F5] rounded-md h-[180px] sm:h-[200px] md:h-[230px] flex items-center justify-center overflow-hidden">
        {/* Product Image */}
        <figure
          className="p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          onClick={() => handleView(item._id)}
        >
          <img
            src={item.myImage[0]}
            alt={item.name}
            className="h-24 sm:h-28 md:h-32 w-full object-contain mix-blend-multiply"
          />
        </figure>

        {/* Action Buttons: Visible on hover for desktop, always visible/easily accessible for mobile */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 md:translate-x-12 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-300">
          <Tooltip title="Add to Wishlist" placement="left">
            <IconButton
              size="small"
              sx={{
                backgroundColor: 'white',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                '&:hover': { backgroundColor: '#f3f4f6' },
              }}
            >
              <FavoriteBorderIcon fontSize="small" sx={{ color: 'black' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Quick View" placement="left">
            <IconButton
              onClick={() => handleView(item._id)}
              size="small"
              sx={{
                backgroundColor: 'white',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                '&:hover': { backgroundColor: '#f3f4f6' },
              }}
            >
              <VisibilityIcon fontSize="small" sx={{ color: 'black' }} />
            </IconButton>
          </Tooltip>
        </div>

        {/* Add to Cart Bar */}
        {/* On mobile (hidden), on desktop (slides up on hover) */}
        <button className="hidden md:flex absolute bottom-0 w-full bg-black text-white py-2.5 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 items-center justify-center gap-2">
          <ShoppingCartOutlinedIcon fontSize="small" />
          Add To Cart
        </button>

        {/* Mobile-only Quick Add Button (Optional: visible on small screens) */}
        <button className="md:hidden absolute bottom-2 right-2 bg-black text-white p-2 rounded-full shadow-lg">
          <ShoppingCartOutlinedIcon fontSize="small" />
        </button>
      </div>

      {/* Bottom Section: Info */}
      <div className="mt-2 sm:mt-3 space-y-1 px-1">
        <h3 className="text-sm md:text-base font-semibold dark:text-white text-gray-800 truncate group-hover:text-red-500 transition-colors">
          {item.name}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="text-red-500 font-bold text-sm md:text-base">
            {item.price} Taka
          </span>
          {/* Star Rating - hidden on very small screens to save space */}
          <div className="hidden xs:flex items-center text-yellow-400 text-[10px] md:text-xs">
            ★★★★★ <span className="text-gray-400 ml-1">(45)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
