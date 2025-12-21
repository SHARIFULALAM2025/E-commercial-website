import React, { useState } from 'react'
import { browse } from './Category'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import BrowseCard from './BrowseCard'
const Browse = () => {
  const itemPerPage = 5
  const [startIndex, setStartIndex] = useState(0)
  const visibleItem = browse.slice(startIndex, startIndex + itemPerPage)
  const handelNext = () => {
    if (startIndex + itemPerPage < browse.length) {
      setStartIndex(startIndex + itemPerPage)
    }
  }
  const handelBefore = () => {
    if (startIndex - itemPerPage >= 0) {
      setStartIndex(startIndex - itemPerPage)
    }
  }
  /*  */
  const AxiosSecure = useAxiosSecure()
  const [currentCategory, setCurrentCategory] = useState(browse[0].category)
  const { data: allData=[] } = useQuery({
      queryKey: ['currentCategory',currentCategory],
      enabled:!!currentCategory,
      queryFn:async () => {
      const res = await AxiosSecure(
        `/category-product?category=${currentCategory}`
      )
      return res.data
    },
  })
  const handelBrowse = (browseCategory,index) => {
      setCurrentCategory(browseCategory)
      setStartIndex(index)
      console.log(browseCategory)

    }
    console.log(allData)

  return (
    <div className="space-y-5 md:mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Browse By Category</h1>
        <div className="flex gap-5 justify-end">
          <div
            onClick={handelBefore}
            className="border rounded-full w-8 h-8 hover:bg-green-500 flex items-center justify-center bg-amber-600"
          >
            <ArrowBackIcon className=""></ArrowBackIcon>
          </div>
          <div
            onClick={handelNext}
            className="border rounded-full w-8 h-8 hover:bg-green-500 flex items-center justify-center bg-amber-600"
          >
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-5">
        {visibleItem.map((item, index) => (
          <div
            onClick={() => handelBrowse(item.category, index)}
            key={index}
            className={`${
              startIndex === index ? 'bg-amber-500' : ''
            } border border-gray-600 rounded p-5 flex justify-center items-center gap-3`}
          >
            <div className="">{item.icon}</div>
            <h1 className="">{item.category}</h1>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-5">
        {allData.map((item, index) => (
          <BrowseCard item={item} key={index}></BrowseCard>
        ))}
      </div>
    </div>
  )
}

export default Browse
