import React, { useState } from "react";
// import BurgerMenu from "./BurgerMenu";
import {
  HeaderComponent,
  Logo,
  LogoImage,
  LogoText,
  NavButtonMobile,
} from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const onToggleModal = () => {
    setIsOpenMenu((prev) => (prev ? false : true));
  };
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
      {!isMobile && <NavLinks />}
      {isOpenMenu && (
        <MobileNavLinks isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      )}
      {isMobile && (
        <NavButtonMobile onClick={onToggleModal}>
          {isOpenMenu ? "Close" : "Menu"}
        </NavButtonMobile>
      )}
    </HeaderComponent>
  );
};

export default Header;
