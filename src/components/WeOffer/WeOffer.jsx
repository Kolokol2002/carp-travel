import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";

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
const dataTets = [data[0]];

const WeOffer = () => {
  return (
    <WeOfferComponent>
      <MainTitle>
        WE <span>OFFER</span>
      </MainTitle>
      {dataTets.map(({ underImageText, id, subtitle, img, name }, idx) => (
        <div key={id}>
          <CountSlides>
            <span>{`0${idx + 1}/`}</span>
            {`0${data.length}`}
          </CountSlides>
          <div>
            <ImageSlideContainer>
              <img src={img} alt={name} />
            </ImageSlideContainer>
            <UnderImageText>{underImageText}</UnderImageText>
            <NameList id={id}>
              {data.map(({ name }) => (
                <Name>{name}</Name>
              ))}
            </NameList>
            <SubTitle>{subtitle}</SubTitle>
          </div>
          <br />
        </div>
      ))}
    </WeOfferComponent>
  );
};

export default WeOffer;
