import React, { useState } from 'react'
import { browse } from './Category'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import BrowseCard from './BrowseCard'

const Browse = () => {
  const AxiosSecure = useAxiosSecure()
  const itemPerPage = 6 // Usually, 6 looks better in a grid than 5
  const [startIndex, setStartIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(browse[0]?.category)

  // Pagination Logic
  const visibleItems = browse.slice(startIndex, startIndex + itemPerPage)

  const handleNext = () => {
    if (startIndex + itemPerPage < browse.length) {
      setStartIndex((prev) => prev + 1) // Step by 1 for smoother carousel feel
    }
  }

  const handleBefore = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1)
    }
  }

  // Data Fetching
  const { data: allData = [], isLoading } = useQuery({
    queryKey: ['currentCategory', currentCategory],
    enabled: !!currentCategory,
    queryFn: async () => {
      const res = await AxiosSecure.get(
        `/category-product?category=${currentCategory}`
      )
      return res.data
    },
  })

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8 py-10 dark:bg-black dark:text-white">
      {/* Header with Styled Navigation */}
      <div className="flex justify-between items-end border-b pb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-8 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-bold text-sm">Categories</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Browse By Category
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleBefore}
            disabled={startIndex === 0}
            className="w-10 h-10 rounded-full bg-gray-100 dark:text-black flex items-center justify-center hover:bg-gray-200 disabled:opacity-30 transition-all"
          >
            <ArrowBackIcon fontSize="small" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + itemPerPage >= browse.length}
            className="w-10 h-10 rounded-full bg-gray-100 dark:text-black flex items-center justify-center hover:bg-gray-200 disabled:opacity-30 transition-all"
          >
            <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Category Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {visibleItems.map((item) => {
          const isActive = currentCategory === item.category
          return (
            <div
              key={item.category}
              onClick={() => setCurrentCategory(item.category)}
              className={`
                cursor-pointer border rounded-md p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300
                ${
                  isActive
                    ? 'bg-red-500 border-red-500 text-white shadow-lg'
                    : 'bg-white border-gray-200 hover:border-red-500 hover:text-red-500'
                }
              `}
            >
              <div
                className={`text-3xl ${isActive ? 'text-white' : 'text-gray-700 hover:inherit'}`}
              >
                {item.icon}
              </div>
              <p className="text-sm dark:text-black font-medium">
                {item.category}
              </p>
            </div>
          )
        })}
      </div>

      {/* Results Section */}
      <div className="pt-8">
        {isLoading ? (
          <div className="text-center py-20 text-gray-500">
            Loading products...
          </div>
        ) : allData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {allData.map((item, index) => (
              <BrowseCard item={item} key={item._id || index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed rounded-xl">
            <p className="text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse
