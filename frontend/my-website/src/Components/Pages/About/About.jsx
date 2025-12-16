import React from 'react'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Delivery from '../Home/Delevery/Delivery'

const About = () => {
    const [active, setActive] = useState(1)
    
  const data = [
    {
      title: '10.5k ',
      image: 'https://i.ibb.co.com/dwBRd8dN/Services.png',
      des: 'Sallers active our site',
    },
    {
      title: '33k ',
      image: 'https://i.ibb.co.com/qTSPRfd/Services-1.png',
      des: 'Mopnthly Produduct Sale',
    },
    {
      title: '33k ',
      image: ' https://i.ibb.co.com/Xxd2SVCN/Services-2.png',
      des: 'Customer active in our site',
    },
    {
      title: '25k ',
      image: ' https://i.ibb.co.com/ccv1h2DV/Services-3.png',
      des: 'Anual gross sale in our site',
    },
  ]

    const carousel = [
      {
        title: 'Tom Cruise ',
        image: ' https://i.ibb.co.com/7ddVWVq7/image-46.png',
        des: 'Founder & Chairman',
      },
      {
        title: 'Emma Watson ',
        image: ' https://i.ibb.co.com/8g4qBwWN/image-51.png',
        des: 'Managing Director',
      },
      {
        title: 'Will Smith ',
        image: ' https://i.ibb.co.com/nNrGwf83/image-47.png',
        des: 'Product Designer',
      },
      {
        title: 'Tom Cruise ',
        image: ' https://i.ibb.co.com/7ddVWVq7/image-46.png',
        des: 'Founder & Chairman',
      },
      {
        title: 'Emma Watson ',
        image: ' https://i.ibb.co.com/8g4qBwWN/image-51.png',
        des: 'Managing Director',
      },
      {
        title: 'Will Smith ',
        image: ' https://i.ibb.co.com/nNrGwf83/image-47.png',
        des: 'Product Designer',
      },
    ]
  return (
    <div className="dark:bg-black">
      <div className="md:flex justify-between items-center">
        <div className="flex-1 space-y-3">
          <h1 className="md:text-3xl text-xl font-semibold dark:text-white text-[#000000]">
            Our Story
          </h1>
          <p className="text-xs text-[#000000] dark:text-white ">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{' '}
          </p>
          <p className="text-xs text-[#000000] dark:text-white">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/Cs1kMZfp/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone-1.png"
            alt=""
            className="rounded w-full bg-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7 md:mt-28">
        {data.map((item, index) => (
          <div
            onClick={() => setActive(index)}
            className={`${
              active == index ? 'bg-[#DB4444] ' : 'bg-white '
            } text-center border-2 p-4 border-[#FAFAFA]`}
            key={index}
          >
            <figure>
              <img src={item.image} alt="" className="mx-auto" />
            </figure>
            <h1 className="dark:text-black ">{item.title} </h1>
            <h1 className="dark:text-black ">{item.des}</h1>
          </div>
        ))}
      </div>
      <div className="md:mt-28">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {carousel.map((item, index) => (
            <SwiperSlide>
              <div className="rounded space-y-3" key={index}>
                <div className="bg-[#F5F5F5] p-5">
                  <img src={item.image} alt="" className="mx-auto h-64 w-fit" />
                </div>
                <h1 className="dark:text-white">{item.title}</h1>
                <p className="dark:text-white">{item.des}</p>
                <div className="dark:text-white flex flex-row gap-2">
                  <XIcon></XIcon>
                  <InstagramIcon></InstagramIcon>
                  <FacebookIcon></FacebookIcon>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Delivery></Delivery>
    </div>
  )
}

export default About

/*




*/
