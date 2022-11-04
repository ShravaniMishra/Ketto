import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/FeaturedInStyle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function FeaturedIn() {
  const sliderData = [
    "https://i.postimg.cc/LXV8ks7g/times-Of-India.jpg",
    "https://i.postimg.cc/90pC9NDd/et.jpg",
    "https://i.postimg.cc/ZRbN3XRH/it.jpg",
    "https://i.postimg.cc/NFGK9Xdz/ht.jpg",
    "https://i.postimg.cc/XYPYjmMm/vice.jpg",
    "https://i.postimg.cc/kMRD2nMs/afaqs.jpg",
    "https://i.postimg.cc/MT4cgNsW/financial-Express.jpg",
    "https://i.postimg.cc/W4f9dpWT/express-Healthcare.jpg",
  ];
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {sliderData.map((img) => (
          <SwiperSlide>
            <Box
              width={"11rem"}
              display={"flex"}
              alignItems={"center"}
              height={"3rem"}
            >
              <img src={img}></img>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
