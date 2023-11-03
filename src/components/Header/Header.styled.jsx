import styled from "@emotion/styled";
import { Link } from "react-scroll";
import { desktop, min, tablet } from "../../styles/media";

export const HeaderComponent = styled.header`
  padding-bottom: 36px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding-bottom: 64px;
  }
`;

export const Logo = styled.div`
  width: 60px;
`;

export const LogoImage = styled.img``;
export const NavLinksStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  ${min(tablet)} {
    flex-direction: row;
    gap: 25px;
  }
  ${min(desktop)} {
    gap: 56px;
  }
`;
export const NavLink = styled.li`
  cursor: pointer;
`;
export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  ${min(tablet)} {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const LogoText = styled.span`
  font-family: Karantina;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.185em;
`;

export const NavButtonMobile = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  z-index: 11;
`;

export const BurgerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #010a05bf;
  backdrop-filter: blur(25px);
`;
