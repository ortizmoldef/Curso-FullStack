"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

const Slider = ({ images }) => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full max-w-3xl"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider;
