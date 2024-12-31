"use client"
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  const slides = [
    {
      image: "/banne4.svg",
      bgColor: "bg-gray-800"
    },
    {
      image: "/banne2.svg",
      bgColor: "bg-gray-800"
    },
    {
      image: "/banne3.svg",
      bgColor: "bg-gray-800"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-16 my-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[650px] rounded-2xl overflow-hidden relative group"
      >
        <div className="swiper-button-prev !w-[60px] !h-[60px] !bg-white !rounded-r-full !left-0 !after:text-black !after:text-2xl !after:font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="swiper-button-next !w-[60px] !h-[60px] !bg-white !rounded-l-full !right-0 !after:text-black !after:text-2xl !after:font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative w-full h-full ${slide.bgColor}`}>
              <Image
                src={slide.image}
                alt="Slide image"
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover w-full h-full"
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
