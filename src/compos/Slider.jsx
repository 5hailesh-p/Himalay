import React from 'react'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const Slider = () => {
  const img = [
    'https://images.unsplash.com/photo-1631139946993-b29d3b5c00a9?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1652216080847-d9a517b86134?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Autoplay,EffectFade]}
      style={{ height: '400px' }} 
      effect='fade'
    >
      {img.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            component="img"
            src={item}
            sx={{
              height: '20rem',
              width: '100%',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
