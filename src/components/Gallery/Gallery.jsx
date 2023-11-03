import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, EffectCreative } from "swiper/modules";
import "./Gallery.css";

import images from "../../data/gallery.json";

const Gallery = () => {
  return (
    <section>
      <MainTitle className="mb-[37px] tablet:mb-[88px]">
        Our <span>Gallery</span>
      </MainTitle>
      <Swiper
        className="swiper-main"
        grabCursor={true}
        centeredSlides={true}
        speed={400}
        loop={true}
        slideActiveClass="active-slide-test"
        slideNextClass="next-slide-test"
        slidePrevClass="prev-slide-test"
        // parallax={true}
        effect="creative"
        // onSwiper={(swiper) => console.dir(swiper)}
        modules={[Parallax, EffectCreative]}
        breakpoints={{
          320: {
            direction: "vertical",
            // centeredSlides: true,
            autoHeight: true,
            slidesPerView: 3,
            creativeEffect: {
              limitProgress: 3, // slides after 2nd before/after active will have same state
              prev: {
                // opacity: not_active_slide_opacity_value,
                scale: 0.9,
                // will set `translateX(-95%)` on previous slides
                translate: [0, "-105%", 0],
              },
              next: {
                // opacity: not_active_slide_opacity_value,
                scale: 0.9,
                // will set `translateX(95%)` on next slides
                translate: [0, "105%", 0],
              },
              // spaceBetween: 24,
            },
          },
          768: {
            direction: "horizontal",
            // autoHeight: false,

            slidesPerView: 1.7,
            creativeEffect: {
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
              // spaceBetween: 24,
            },
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
