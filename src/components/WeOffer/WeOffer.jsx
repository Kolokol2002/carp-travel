import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Parallax, A11y, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import data from "../../data/slider.json";
import {
  CountSlides,
  ImageSlideContainer,
  Name,
  NameList,
  SubTitle,
  UnderImageText,
  WeOfferComponent,
} from "./WeOffer.styled";
// const dataTets = [data[0]];

const Test = ({ data, id }) => {
  const swiper = useSwiper();
  return (
    <NameList id={id}>
      {data.map(({ name, id }) => (
        <Name
          onClick={() => {
            swiper.slideToLoop(id - 1);
            // swiper.changeDirection();
          }}
        >
          {name}
        </Name>
      ))}
    </NameList>
  );
};

const WeOffer = ({ refIn }) => {
  return (
    <WeOfferComponent ref={refIn}>
      <MainTitle>
        WE <span>OFFER</span>
      </MainTitle>
      <Swiper
        parallax={true}
        modules={[A11y, EffectFade, Parallax]}
        slidesPerView={1}
        speed={1}
        // edgeSwipeDetection={"prevent"}
        loop={true}
        allowTouchMove={false}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <div data-swiper-parallax="0"></div> */}
        {data.map(({ underImageText, id, subtitle, img, name }, idx) => (
          <SwiperSlide key={id}>
            <CountSlides
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-duration="2000"
            >
              <span>{`0${idx + 1}/`}</span>
              {`0${data.length}`}
            </CountSlides>
            <div>
              <ImageSlideContainer>
                <img
                  src={img}
                  alt={name}
                  data-swiper-parallax-opacity="0"
                  data-swiper-parallax-duration="2000"
                />
              </ImageSlideContainer>
              <UnderImageText
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-duration="2000"
              >
                {underImageText}
              </UnderImageText>
              <Test
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-duration="2000"
                data={data}
                id={id}
              />
              <SubTitle
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-duration="2000"
              >
                {subtitle}
              </SubTitle>
            </div>
            <br />
          </SwiperSlide>
        ))}
      </Swiper>
    </WeOfferComponent>
  );
};

export default WeOffer;
