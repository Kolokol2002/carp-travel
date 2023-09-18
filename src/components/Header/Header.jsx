import React from "react";
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
        <LogoImage src={"/images/logo.png"} className="App-logo" alt="logo" />
        <LogoText>CarpTravel</LogoText>
      </Logo>
      <NavButtonMobile>Menu</NavButtonMobile>
    </HeaderComponent>
  );
};

export default Header;
