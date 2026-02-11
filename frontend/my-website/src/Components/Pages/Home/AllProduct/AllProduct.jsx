import React from 'react'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Card from './Card' // Ensure this Card matches the CategoryCard style

const AllProduct = () => {
  const AxiosSecure = useAxiosSecure()

  const { data: product = [], isLoading } = useQuery({
    queryKey: ['allProduct'],
    queryFn: async () => {
      const res = await AxiosSecure(
        `${import.meta.env.VITE_serverBaseUrl}/product-all`
      )
      return res.data
    },
  })

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-bold text-sm uppercase tracking-wider">
              Our Products
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Explore Our Products
          </h2>
        </div>

        {/* Optional: Add a 'View All' or Filter button here */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition-colors text-sm font-medium">
          View All Products
        </button>
      </div>

      {/* Responsive Grid */}
      {/* grid-cols-2: 2 items on mobile
                sm:grid-cols-3: 3 items on tablets
                md:grid-cols-4: 4 items on small desktops
                lg:grid-cols-4: stays 4 or can go to 5 depending on your preference
            */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
        {isLoading
          ? // Simple loading placeholder
            [...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-100 animate-pulse rounded-md"
              />
            ))
          : product.map((item, index) => (
              <Card item={item} key={item._id || index} />
            ))}
      </div>

      {/* Bottom Decoration/Pagination Placeholder */}
      {product.length > 0 && (
        <div className="flex justify-center pt-8">
          <div className="h-1 w-24 bg-gray-100 rounded-full" />
        </div>
      )}
    </section>
  )
}

export default AllProduct
