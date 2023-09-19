import React from "react";
import {
  HeroComponent,
  LocationText,
  SecondaryText,
  UsText,
} from "./Hero.stylled";
import ButtonHero from "../../common/Buttons/Buttons";
import MainTitle from "../../common/MainTitle/MainTitle";

const Hero = ({ refEl }) => {
  return (
    <HeroComponent>
      {/* <div className="flex justify-end">
        <h3 className="flex justify-center w-fit flex-col uppercase text-[37px] mb-6 mr-[-7px] leading-[45px] tablet:text-[67px] tablet:leading-[81px] tablet:order-3 tablet:mb-[56px] tablet:mr-[-17px] ">
          <div>
            <span className="font-medium tracking-normal">7</span>
            <span className="font-thin tracking-[0.045em]">days</span>
          </div>
          <span className="block font-light text-xs leading-[15px] tracking-[0.8em] ">
            journey
          </span>
        </h3>
      </div> */}
      <SecondaryText>
        <h3>
          <span>7</span>
          <span>days</span>
          <span>journey</span>
        </h3>
      </SecondaryText>
      <MainTitle>
        <span>Uncovern</span>
        <br />
        Carpathian’s
        <br />
        Secrets
      </MainTitle>
      <LocationText>
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </LocationText>
      <UsText>
        <h3>
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </h3>
      </UsText>
      <ButtonHero refEl={refEl} />
    </HeroComponent>
  );
};

export default Hero;
