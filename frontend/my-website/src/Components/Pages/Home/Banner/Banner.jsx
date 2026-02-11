import React, { useContext, useState } from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'

// MUI & Icons
import { Box, Typography, ListItemButton } from '@mui/material'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

// Project Imports
import { bannerData } from './BannerData'
import { dataProduct, dataWomen } from './SidebarCategory'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import CategoryCard from './CategoryCard'

// Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const Banner = () => {
  const [openMen, setOpenMen] = useState(false)
  const [openWomen, setOpenWomen] = useState(true)
  const [activeCategory, setActiveCategory] = useState(dataWomen[0].category)
  // const { theme } = useContext(AuthContext) // Use this if you need conditional logic
  const AxiosSecure = useAxiosSecure()

  const { data: categoryProduct = [] } = useQuery({
    queryKey: ['product', activeCategory],
    enabled: !!activeCategory,
    queryFn: async () => {
      const res = await AxiosSecure(
        `/category-product?category=${activeCategory}`
      )
      return res.data
    },
  })

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    if (window.innerWidth < 768) {
      document
        .getElementById('featured-section')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const allCategories = [...dataWomen, ...dataProduct]

  return (
    // Added dark:bg-neutral-900 (or black) and dark:text-white
    <div className="max-w-7xl mx-auto px-4 py-4 bg-white dark:bg-[#0a0a0a] text-black dark:text-white md:py-8 space-y-6 md:space-y-10 transition-colors duration-300">
      {/* MOBILE CATEGORY SELECTOR */}
      <div className="md:hidden overflow-x-auto no-scrollbar flex gap-3 pb-2">
        {allCategories.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(item.category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-all ${
              activeCategory === item.category
                ? 'bg-red-500 border-red-500 text-white'
                : 'bg-gray-100 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-0 md:gap-6">
        {/* SIDEBAR */}
        <aside className="col-span-3 border-r border-black dark:border-white  hidden md:block">
          <Box className="space-y-2">
            <div className="border-b border-black dark:border-white  pb-2">
              <ListItemButton
                onClick={() => setOpenWomen(!openWomen)}
                className="hover:bg-transparent p-0 flex justify-between group"
              >
                {/* Removed hardcoded text-black */}
                <Typography className="font-semibold py-2 text-inherit">
                  Woman’s Fashion
                </Typography>
                <KeyboardArrowDown
                  className={`transition-transform duration-300 ${openWomen ? 'rotate-180' : ''}`}
                  fontSize="small"
                />
              </ListItemButton>
              {openWomen &&
                dataWomen.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(item.category)}
                    className={`flex items-center justify-between py-2 cursor-pointer transition-colors hover:text-red-500 ${
                      activeCategory === item.category
                        ? 'text-red-500 font-medium'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span className="text-sm">{item.category}</span>
                    <ChevronRightIcon
                      fontSize="small"
                      className="opacity-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
            </div>

            <div className="pt-2">
              <ListItemButton
                onClick={() => setOpenMen(!openMen)}
                className="hover:bg-transparent p-0 flex justify-between"
              >
                <Typography className="font-semibold py-2 text-inherit">
                  Men’s Fashion
                </Typography>
                <KeyboardArrowDown
                  className={`transition-transform duration-300 ${openMen ? 'rotate-180' : ''}`}
                  fontSize="small"
                />
              </ListItemButton>
              {openMen &&
                dataProduct.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(item.category)}
                    className={`flex items-center py-2 cursor-pointer transition-colors hover:text-red-500 ${
                      activeCategory === item.category
                        ? 'text-red-500 font-medium'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span className="text-sm">{item.category}</span>
                  </div>
                ))}
            </div>
          </Box>
        </aside>

        {/* HERO SLIDER (Remains mostly black by design) */}
        <main className="col-span-12 md:col-span-9">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="rounded-lg md:rounded-sm overflow-hidden shadow-xl md:shadow-none"
          >
            {bannerData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-black text-white min-h-[300px] md:min-h-[400px] flex flex-col md:flex-row items-center justify-between p-6 md:p-16 relative">
                  <div className="space-y-4 md:space-y-6 z-10 w-full md:w-1/2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <img
                        src="https://i.ibb.co/3p0Xvpx/apple-logo.png"
                        alt="Brand"
                        className="w-6 md:w-8 invert"
                      />
                      <span className="text-xs md:text-sm tracking-widest text-gray-300">
                        {item.title}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                      {item.des}
                    </h1>
                    <div className="pt-2 md:pt-4">
                      <button className="inline-flex border-b-2 border-white font-medium hover:text-gray-300 transition-all items-center gap-2 pb-1">
                        Shop Now <ChevronRightIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                      src={item.image}
                      alt="Banner"
                      className="h-48 md:h-72 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </div>

      {/* CATEGORY PRODUCT GRID */}
      <section id="featured-section" className="pt-6 md:pt-10">
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="w-4 h-8 md:w-5 md:h-10 bg-red-500 rounded-sm"></div>
          <h2 className="text-xl md:text-2xl font-bold">
            Featured in {activeCategory}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {categoryProduct.length > 0 ? (
            categoryProduct.map((item, index) => (
              <CategoryCard key={index} item={item} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center border-2 border-dashed rounded-xl border-gray-200 dark:border-neutral-800 text-gray-400 text-sm">
              No products available in this sub-category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Banner
