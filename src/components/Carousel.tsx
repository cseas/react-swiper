import React, { useState } from "react";
import SwiperCore, { EffectCoverflow, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import { Card } from "./Card";

// install Swiper components
SwiperCore.use([EffectCoverflow, Keyboard, Pagination]);

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  return (
    <>
      <Swiper
        style={{ width: "100%", height: "100%", padding: "50px 0px" }}
        centeredSlides={true}
        slidesPerView={"auto"}
        // effect={"coverflow"}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        // spaceBetween={50}
        pagination={{ clickable: true }}
        keyboard
        onSlideChange={(event) => setActiveIndex(event.activeIndex + 1)}
        grabCursor={true}
      >
        <SwiperSlide>
          <Card>Slide 1</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 2</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 3</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 4</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 5</Card>
        </SwiperSlide>
      </Swiper>
      <h4 style={{ textAlign: "center" }}>
        Selected slide index: {activeIndex}
      </h4>
    </>
  );
}
