import styled from "styled-components";

export const HeaderComponent = styled("header")`
  padding-bottom: 36px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding-bottom: 64px;
  }
`;

export const Logo = styled("div")`
  width: 60px;
`;

export const LogoImage = styled("img")``;

export const LogoText = styled("span")`
  font-family: Karantina;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.185em;
  color: rgba(255, 255, 255, 1);
`;

export const NavButtonMobile = styled("button")`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: none;
  }
`;
