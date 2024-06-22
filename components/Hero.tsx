"use client";
import React, { useState } from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { SliderInfo } from "@/app/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDynamicCss } from "@/hooks/useDynamicCss";

function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const windowWidth = useDynamicCss();
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={(windowWidth !== null && windowWidth >= 1024) ? true : false}
      autoplay={(windowWidth !== null &&  windowWidth < 1024) ? true : false}
      slidesPerView={1}
      speed={3000}
      onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      spaceBetween={10}
      className="bg-black"
    >
      {SliderInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 items-center px-5 my-5 lg:w-[89%] mx-auto">
            <HeroText
              headerText={item.header}
              active={activeSlideIndex === item.id}
            />
            <HeroImage imgSrc={item.imgSrc} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
