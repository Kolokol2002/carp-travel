import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../common/BackgroundImage/BackgroundImage";
import AboutUs from "../../components/AboutUs/AboutUs";
import { HomePage } from "./Home.styled";
import Container from "../../common/Container/Container";
import Hero from "../../components/Hero/Hero";
import WeOffer from "../../components/WeOffer/WeOffer";
import Gallery from "../../components/Gallery/Gallery";
import {
  ChooseUsFirst,
  ChooseUsSecond,
} from "../../components/ChooseUs/ChooseUs";
import { useMediaQuery } from "react-responsive";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
      <BackgroundImage src={"background-choose-us.jpg"}>
        <Container name={"choose_first"}>
          <ChooseUsFirst />
        </Container>
      </BackgroundImage>
      {isMobile && (
        <BackgroundImage src={"background-choose-us.jpg"}>
          <Container name={"choose_second"}>
            <ChooseUsSecond />
          </Container>
        </BackgroundImage>
      )}
      <BackgroundImage src={"background-header-our-gallery.jpg"}>
        <Container name={"gallery"}>
          <Gallery />
        </Container>
      </BackgroundImage>
      <BackgroundImage src={"background-contact.jpg"}>
        <Container name={"contacts"}>
          <ContactUs />
        </Container>
      </BackgroundImage>
    </HomePage>
  );
};

export default Home;
