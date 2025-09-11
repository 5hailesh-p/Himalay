import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'

const Slider = () => {
  return (
    <>
    <Swiper spaceBetween={10} slidesPerView={1}>
      {[1,2,3].map((item)=>(
        <SwiperSlide key={item}>
          <Card>
            <CardContent>
              <Typography variant='h4'>item {item}</Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default Slider