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

const Test = ({ data, id }) => {
  const swiper = useSwiper();
  return (
    <NameList id={id}>
      {data.map(({ name, id, underImageText }) => (
        <Name
          onClick={() => {
            const translatePred = swiper.translate;
            swiper.slideToLoop(id - 1);
            const translate = swiper.translate;
            swiper.translateTo(translatePred);
            const el = swiper.el.getElementsByClassName(
              "active-slide-test-offer",
            )[0];
            el.classList.remove("active-slide-test-offer");

            setTimeout(() => {
              swiper.translateTo(translate);
              el.classList.add("active-slide-test-offer");
            }, 300);
          }}
        >
          <span>{name}</span>
          <p>{underImageText}</p>
        </Name>
      ))}
    </NameList>
  );
};

const WeOffer = () => {
  return (
    <WeOfferComponent>
      <MainTitle
        className="mb-[24px] 
      tablet:absolute 
      desktop:mb-[23px]"
      >
        WE <span className="">OFFER</span>
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
            <div
              className="mb-[16px] text-right text-[43px] font-thin leading-[52px]
            tablet:mb-[52px] tablet:ml-[495px] tablet:text-start tablet:text-[67px]
            desktop:mb-[37px] desktop:ml-[617px] desktop:text-[98px] desktop:leading-[75px]"
            >
              <span className="">{`0${idx + 1}/`}</span>
              <span className="text-white text-opacity-[0.2]">{`0${data.length}`}</span>
            </div>
            <div
              className="
            tablet:flex tablet:gap-[39px]
           desktop:gap-[20px]"
            >
              <img
                className="mb-[12px] 
              tablet:m-0 tablet:h-[370px] tablet:w-[463px] tablet:object-cover
               desktop:h-[429px] desktop:w-[607px]"
                src={img}
                alt={name}
              />
              <div className=" tablet:flex tablet:flex-col desktop:justify-between">
                <UnderImageText className="slider-underImageText tablet:order-2">
                  {underImageText}
                </UnderImageText>
                <Test className="tablet:" data={data} id={id} />
                <SubTitle className="slider-subtitle tablet:order-3">
                  {subtitle}
                </SubTitle>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </WeOfferComponent>
  );
};

export default WeOffer;
