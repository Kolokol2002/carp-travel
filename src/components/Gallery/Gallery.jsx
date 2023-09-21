import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, EffectCreative } from "swiper/modules";
import "./Gallery.css";

import images from "../../data/gallery.json";

const Gallery = () => {
  return (
    <section>
      <MainTitle className="mb-[88px] text-center">
        Our <span>Gallery</span>
      </MainTitle>
      <Swiper
        // className="h-[1000px]"
        slidesPerView={1.7}
        grabCursor={true}
        centeredSlides={true}
        speed={400}
        loop={true}
        slideActiveClass="active-slide-test"
        slideNextClass="next-slide-test"
        slidePrevClass="prev-slide-test"
        // parallax={true}
        effect="creative"
        creativeEffect={{
          limitProgress: 3, // slides after 2nd before/after active will have same state
          prev: {
            // opacity: not_active_slide_opacity_value,
            scale: 0.292,
            // will set `translateX(-95%)` on previous slides
            translate: ["-70%", 0, 0],
          },
          next: {
            // opacity: not_active_slide_opacity_value,
            scale: 0.292,
            // will set `translateX(95%)` on next slides
            translate: ["70%", 0, 0],
          },
        }}
        onSwiper={(swiper) => console.dir(swiper)}
        modules={[Parallax, EffectCreative]}
        breakpoints={{
          480: { direction: "vertical" },
          768: {
            direction: "horizontal",
            // spaceBetween: 24,
          },
          1280: {},
        }}
      >
        {images.map(({ id, url, alt }) => (
          //
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
