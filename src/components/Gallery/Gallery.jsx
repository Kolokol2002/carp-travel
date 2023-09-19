import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gallery.css";

import images from "../../data/gallery.json";

const Gallery = () => {
  return (
    <section>
      <MainTitle>
        Our <span>Gallery</span>
      </MainTitle>
      <Swiper
        className="h-[1000px]"
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        speed={400}
        loop={true}
        direction="vertical"
        slideActiveClass="active-slide-test"
        slideNextClass="next-slide-test"
        slidePrevClass="prev-slide-test"
        onSwiper={(swiper) => console.dir(swiper)}
      >
        {images.map(({ id, url, alt }) => (
          <SwiperSlide className="slide-test" key={id}>
            <div>
              <img src={url} alt={alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
