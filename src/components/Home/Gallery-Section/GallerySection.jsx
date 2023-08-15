import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GallerySection.css";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import React from "react";
import galleryImage1 from "../../../Assets/images/IMG-20230814-WA0003.jpg";

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <div className="top-section">
        <h1 className="header">Gallery</h1>
      </div>
      <div className="bottom-section">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={galleryImage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
