import React from "react";
import { LinkStyled, NavLink, NavLinksStyled } from "./Header.styled";
import { useMediaQuery } from "react-responsive";

const NavLinks = ({ setIsOpenMenu }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const onClick = () => {
    if (!isMobile) return;
    setIsOpenMenu(false);
  };
  return (
    <NavLinksStyled>
      <NavLink>
        <LinkStyled to="about" onClick={onClick} smooth={true}>
          About
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="services" onClick={onClick} smooth={true}>
          Services
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="choose_first" onClick={onClick} smooth={true}>
          Career
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="gallery" onClick={onClick} smooth={true}>
          Gallery
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="contacts" onClick={onClick} smooth={true}>
          Contacts
        </LinkStyled>
      </NavLink>
    </NavLinksStyled>
  );
};

export default NavLinks;
