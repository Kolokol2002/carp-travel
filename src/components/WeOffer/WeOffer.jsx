import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";

import "./WeOffer.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Parallax, A11y, EffectFade } from "swiper/modules";

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
            const translatePred = swiper.translate;
            swiper.slideToLoop(id - 1);
            const translate = swiper.translate;
            swiper.translateTo(translatePred);
            const el = swiper.el.getElementsByClassName(
              "active-slide-test-offer"
            )[0];
            el.classList.remove("active-slide-test-offer");

            setTimeout(() => {
              swiper.translateTo(translate);
              el.classList.add("active-slide-test-offer");
            }, 300);
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
        modules={[A11y, EffectFade, Parallax]}
        slidesPerView={1}
        speed={1}
        allowTouchMove={false}
        wrapperClass="slide-wraper-offer"
        slideActiveClass="active-slide-test-offer"
        slideNextClass="next-slide-test-offer"
        slidePrevClass="prev-slide-test-offer"
      >
        {data.map(({ underImageText, id, subtitle, img, name }, idx) => (
          <SwiperSlide className="slide-test-offer" key={id}>
            <CountSlides>
              <span>{`0${idx + 1}/`}</span>
              {`0${data.length}`}
            </CountSlides>
            <div>
              <ImageSlideContainer>
                <img src={img} alt={name} />
              </ImageSlideContainer>
              <UnderImageText className="slider-underImageText">
                {underImageText}
              </UnderImageText>
              <Test data={data} id={id} />
              <SubTitle className="slider-subtitle">
                <p>{subtitle}</p>
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
