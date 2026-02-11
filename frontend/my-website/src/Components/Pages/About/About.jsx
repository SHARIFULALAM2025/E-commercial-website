import React, { useState } from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Icons
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

// Components
import Delivery from '../Home/Delevery/Delivery'

// Swiper Styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const About = () => {
  const [active, setActive] = useState(1)

  const stats = [
    {
      title: '10.5k',
      image: 'https://i.ibb.co.com/dwBRd8dN/Services.png',
      des: 'Sellers active our site',
    },
    {
      title: '33k',
      image: 'https://i.ibb.co.com/qTSPRfd/Services-1.png',
      des: 'Monthly Product Sale',
    },
    {
      title: '45.5k',
      image: 'https://i.ibb.co.com/Xxd2SVCN/Services-2.png',
      des: 'Customer active in our site',
    },
    {
      title: '25k',
      image: 'https://i.ibb.co.com/ccv1h2DV/Services-3.png',
      des: 'Anual gross sale in our site',
    },
  ]

  const team = [
    {
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
      image: 'https://i.ibb.co.com/7ddVWVq7/image-46.png',
    },
    {
      name: 'Emma Watson',
      role: 'Managing Director',
      image: 'https://i.ibb.co.com/8g4qBwWN/image-51.png',
    },
    {
      name: 'Will Smith',
      role: 'Product Designer',
      image: 'https://i.ibb.co.com/nNrGwf83/image-47.png',
    },
    // Duplicate entries for carousel loop
    {
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
      image: 'https://i.ibb.co.com/7ddVWVq7/image-46.png',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 dark:bg-black transition-colors duration-300">
      {/* SECTION 1: OUR STORY */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 md:mb-32">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-gray-900 tracking-tight">
            Our Story
          </h1>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer electronics to fashion.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img
            src="https://i.ibb.co.com/Cs1kMZfp/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone-1.png"
            alt="About Exclusive"
            className="rounded-lg w-full h-[300px] md:h-[500px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* SECTION 2: STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 md:mb-32">
        {stats.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className={`cursor-pointer transition-all duration-300 text-center border rounded-md p-6 md:p-10 flex flex-col items-center gap-3 ${
              active === index
                ? 'bg-[#DB4444] border-[#DB4444] shadow-xl transform -translate-y-2'
                : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
            }`}
          >
            <div
              className={`p-2 rounded-full transition-colors ${active === index ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <img
                src={item.image}
                alt="Icon"
                className={`w-10 h-10 object-contain ${active === index ? 'brightness-0 invert' : ''}`}
              />
            </div>
            <h2
              className={`text-2xl md:text-3xl font-bold ${active === index ? 'text-white' : 'text-gray-900 dark:text-white'}`}
            >
              {item.title}
            </h2>
            <p
              className={`text-xs md:text-sm ${active === index ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}
            >
              {item.des}
            </p>
          </div>
        ))}
      </div>

      {/* SECTION 3: TEAM CAROUSEL */}
      <div className="mb-20 md:mb-32">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="pb-14"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-4 group">
                <div className="bg-[#F5F5F5] dark:bg-gray-800 rounded-md pt-8 overflow-hidden flex justify-center h-[350px] md:h-[430px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold dark:text-white text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
                <div className="flex gap-4 text-gray-700 dark:text-gray-300">
                  <XIcon
                    className="cursor-pointer hover:text-[#DB4444] transition-colors"
                    fontSize="small"
                  />
                  <InstagramIcon
                    className="cursor-pointer hover:text-[#DB4444] transition-colors"
                    fontSize="small"
                  />
                  <FacebookIcon
                    className="cursor-pointer hover:text-[#DB4444] transition-colors"
                    fontSize="small"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SECTION 4: DELIVERY INFO */}
      <Delivery />
    </div>
  )
}

export default About
