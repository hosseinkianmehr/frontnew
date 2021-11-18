import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import styles from "./indexstyles.module.css"

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Swipers() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className={styles.swiper}
        
      >
        <SwiperSlide className={styles.SwiperSlide}><div className={styles.img}></div></SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}><div className={styles.img2}></div> </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}><div className={styles.img3}></div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
