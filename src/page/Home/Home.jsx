import React from "react";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../common/BackgroundImage/BackgroundImage";
import AboutUs from "../../components/AboutUs/AboutUs";
import { HomePage } from "./Home.styled";
import Container from "../../common/Container/Container";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <HomePage>
      <BackgroundImage src={"background-header-hero.jpg"}>
        <Container home>
          <Header />
          <Hero />
        </Container>
      </BackgroundImage>
      <BackgroundImage src={"background-about-us.jpg"}>
        <Container>
          <AboutUs />
        </Container>
      </BackgroundImage>
    </HomePage>
  );
};

export default Home;
