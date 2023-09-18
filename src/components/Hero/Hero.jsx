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
