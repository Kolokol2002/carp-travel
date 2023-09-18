import React from "react";
// import BurgerMenu from "./BurgerMenu";
import {
  HeaderComponent,
  Logo,
  LogoImage,
  LogoText,
  NavButtonMobile,
} from "./Header.styled";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <HeaderComponent>
      {/* <BurgerMenu /> */}
      <Logo>
        <LogoImage
          src={"/carp-travel/images/logo.png"}
          className="App-logo"
          alt="logo"
        />
        <LogoText>CarpTravel</LogoText>
      </Logo>
      <Link to="about" smooth={true}>
        About
      </Link>
      <Link to="services" smooth={true}>
        Services
      </Link>
      <NavButtonMobile>Menu</NavButtonMobile>
    </HeaderComponent>
  );
};

export default Header;
