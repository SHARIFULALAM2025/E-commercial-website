import React from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReusableButton from '../../../ReusableComponent/ReusableButton'
import { bannerData } from './BannerData'
const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-9">
          <Swiper
            slidesPerView={1}
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
            {bannerData.map((item, index) => (
              <SwiperSlide>
                <div
                  className="rounded bg-black flex items-center justify-between relative p-5"
                  key={index}
                >
                  <div className="absolute bottom-12">
                    <ReusableButton
                      text="Bye Now"
                      variant="contained"
                    ></ReusableButton>
                  </div>
                  <div className="text-white space-y-2">
                    <h1 className="md:text-4xl font-bold">{item.title}</h1>
                    <h1 className="text-xl font-bold">{item.des}</h1>
                  </div>
                  <div className=" p-5">
                    <img
                      src={item.image}
                      alt=""
                      className="mx-auto h-72  w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Banner
