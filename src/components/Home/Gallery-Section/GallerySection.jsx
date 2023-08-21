import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GallerySection.css";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import React from "react";
import galleryImage1 from "../../../Assets/images/IMG-20230814-WA0003.jpg";
import galleryImage2 from "../../../Assets/images/1.jpg";
import galleryImage3 from "../../../Assets/images/2.jpg";
import galleryImage4 from "../../../Assets/images/3.jpg";
import galleryImage5 from "../../../Assets/images/4.jpg";
import galleryImage6 from "../../../Assets/images/5.jpg";
import galleryImage7 from "../../../Assets/images/6.jpg";
import galleryImage8 from "../../../Assets/images/7.jpg";
import galleryImage9 from "../../../Assets/images/8.jpg";
import galleryImage10 from "../../../Assets/images/9.jpg";
import galleryImage11 from "../../../Assets/images/10.jpg";


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
            <img src={galleryImage2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImage11} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
