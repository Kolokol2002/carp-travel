import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../common/BackgroundImage/BackgroundImage";
import AboutUs from "../../components/AboutUs/AboutUs";
import { HomePage } from "./Home.styled";
import Container from "../../common/Container/Container";
import Hero from "../../components/Hero/Hero";
import WeOffer from "../../components/WeOffer/WeOffer";

const Home = () => {
  const ref = useRef(null);
  console.log(ref);
  return (
    <HomePage>
      <BackgroundImage src={"background-header-hero.jpg"}>
        <Container home>
          <Header />
          <Hero refEl={ref} />
        </Container>
      </BackgroundImage>

      <BackgroundImage src={"background-about-us.jpg"}>
        <Container name={"about"}>
          <AboutUs />
        </Container>
      </BackgroundImage>

      <BackgroundImage src={"background-we-offer.jpg"}>
        <Container name={"services"}>
          <WeOffer refIn={ref} />
        </Container>
      </BackgroundImage>
    </HomePage>
  );
};

export default Home;
