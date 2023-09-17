import React from "react";
// import logo from "../../../public/images/logo.png";
// import BurgerMenu from "./BurgerMenu";
import {
  HeaderComponent,
  Logo,
  LogoImage,
  LogoText,
  NavButtonMobile,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderComponent>
      {/* <BurgerMenu /> */}
      <Logo>
        {/* <LogoImage src={#} className="App-logo" alt="logo" /> */}
        <LogoText>CarpTravel</LogoText>
      </Logo>
      <NavButtonMobile>Menu</NavButtonMobile>
    </HeaderComponent>
  );
};

export default Header;
