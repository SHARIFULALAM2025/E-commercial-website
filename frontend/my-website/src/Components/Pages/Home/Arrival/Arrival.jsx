import React from 'react'
import ReusableButton from '../../../ReusableComponent/ReusableButton'

const Arrival = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <span className="text-red-500 font-bold text-sm">Featured</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">New Arrival</h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* PS5 - Large Vertical Card */}
        <div className="md:col-span-2 md:row-span-2 relative bg-black rounded-md overflow-hidden group">
          <img
            src="https://i.ibb.co.com/VWjthfJb/Frame-684.png"
            alt="PS5"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 space-y-3">
            <h3 className="text-2xl font-bold text-white">PlayStation 5</h3>
            <p className="text-gray-300 text-sm max-w-[250px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div>
              <button className="text-white font-medium border-b border-white hover:text-gray-300 transition-colors pb-1">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Women's Collection - Wide Horizontal Card */}
        <div className="md:col-span-2 md:row-span-1 relative bg-black rounded-md overflow-hidden group">
          <img
            src="https://i.ibb.co.com/LXFKPxzq/Frame-685.png"
            alt="Women's Collection"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 space-y-2">
            <h3 className="text-xl font-bold text-white">
              Women’s Collections
            </h3>
            <p className="text-gray-300 text-sm max-w-[200px]">
              Featured woman collections that give you another vibe.
            </p>
            <button className="text-white text-sm font-medium border-b border-white w-fit hover:text-gray-300 pb-1">
              Shop Now
            </button>
          </div>
        </div>

        {/* Speakers - Small Square Card */}
        <div className="md:col-span-1 md:row-span-1 relative bg-black rounded-md overflow-hidden group">
          <img
            src="https://i.ibb.co.com/jPBYxBZ6/Frame-686.png"
            alt="Speakers"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 space-y-1">
            <h3 className="text-lg font-bold text-white">Speakers</h3>
            <p className="text-gray-300 text-xs">Amazon wireless speakers</p>
            <button className="text-white text-xs font-medium border-b border-white w-fit pt-1 pb-1">
              Shop Now
            </button>
          </div>
        </div>

        {/* Perfume - Small Square Card */}
        <div className="md:col-span-1 md:row-span-1 relative bg-black rounded-md overflow-hidden group">
          <img
            src="https://i.ibb.co.com/jPBYxBZ6/Frame-686.png" // Replace with perfume image if available
            alt="Perfume"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 space-y-1">
            <h3 className="text-lg font-bold text-white">Perfume</h3>
            <p className="text-gray-300 text-xs">GUCCI INTENSE OUD EDP</p>
            <button className="text-white text-xs font-medium border-b border-white w-fit pt-1 pb-1">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Arrival
