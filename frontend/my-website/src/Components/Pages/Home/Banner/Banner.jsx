import React from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReusableButton from '../../../ReusableComponent/ReusableButton'
import { bannerData } from './BannerData'

import Box from '@mui/material/Box'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

import Paper from '@mui/material/Paper'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import {  dataProduct, Women } from './SidebarCategory'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import CategoryCard from './CategoryCard'
const Banner = () => {
  const [open, setOpen] = React.useState(false)
  const [women, setWomen] = React.useState(true)
  const [newCategory, setNewCategory] = useState([])
  console.log(newCategory)
  const AxiosSecure = useAxiosSecure()

  const { data: categoryProduct = [] } = useQuery({
    queryKey: ['product', newCategory],
    enabled:!!newCategory,
    queryFn: async () => {
      const res = await AxiosSecure(`/category-product?category=${newCategory}`)
      return res.data
    },
  })
  const handelShow = (Category) => {
    const cleanCategory = Category.replace(/\s+/g, "")
    setNewCategory(cleanCategory)
  }
  console.log(categoryProduct)


  return (
    <div>
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-3 space-y-1 bg-black">
          <div className="">
            <Box sx={{ display: 'flex' }}>
              <Paper elevation={0} sx={{ width: '100%' }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    backgroundColor: 'black',
                    color: 'white',
                    pb: open ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      '&:hover svg': {
                        opacity: 1,
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                          Men’s Fashion
                        </Typography>
                      }
                    />

                    <KeyboardArrowDown
                      sx={{
                        transition: '0.2s',
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        opacity: 0.8,
                      }}
                    />
                  </ListItemButton>

                  {open &&
                    dataProduct.map((item, index) => (
                      <ListItemButton
                        onClick={() => handelShow(item.category)}
                        key={index}
                        sx={{
                          py: 0,
                          minHeight: 32,
                        }}
                      >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontSize: 14 }}>
                              {item.category}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    ))}
                </Box>
              </Paper>
            </Box>
          </div>
          <div className="">
            <Box sx={{ display: 'flex' }}>
              <Paper elevation={0} sx={{ width: '100%' }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    backgroundColor: 'black',
                    color: 'white',
                    pb: open ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    onClick={() => setWomen(!women)}
                    aria-expanded={women}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      '&:hover svg': {
                        opacity: 1,
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                          Woman’s Fashion
                        </Typography>
                      }
                    />

                    <KeyboardArrowDown
                      sx={{
                        transition: '0.2s',
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        opacity: 0.8,
                      }}
                    />
                  </ListItemButton>

                  {women &&
                    Women.map((item, index) => (
                      <ListItemButton
                        onClick={() => handelShow(item.category)}
                        key={index}
                        sx={{
                          py: 0,
                          minHeight: 32,
                        }}
                      >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontSize: 14 }}>
                              {item.category}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    ))}
                </Box>
              </Paper>
            </Box>
          </div>
        </div>
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
              <SwiperSlide key={index}>
                <div className="rounded bg-black flex items-center justify-between relative p-5">
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
      <div className="grid grid-cols-5 gap-2">
        {categoryProduct.map((item, index) => (
          <CategoryCard key={index} item={item}></CategoryCard>
        ))}
      </div>
    </div>
  )
}

export default Banner
