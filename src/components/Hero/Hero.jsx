import React from "react";
import {
  HeroComponent,
  LocationText,
  MainText,
  SecondaryText,
  UsText,
} from "./Hero.stylled";
import ButtonHero from "../../common/Buttons/Buttons";

const Hero = () => {
  return (
    <HeroComponent>
      <SecondaryText>
        <h2>
          <span>7</span>
          <span>days</span>
          <span>journey</span>
        </h2>
      </SecondaryText>
      <MainText>
        <span>Uncovern</span>
        <br />
        Carpathian’s
        <br />
        Secrets
      </MainText>
      <LocationText>
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </LocationText>
      <UsText>
        <h2>
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </h2>
      </UsText>
      <ButtonHero />
    </HeroComponent>
  );
};

export default Hero;
