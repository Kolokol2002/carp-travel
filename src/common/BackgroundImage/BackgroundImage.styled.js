import styled from "styled-components";

export const BackgroundMain = styled.div`
  background-image: url(/images/${(prop) => prop.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 20%;
`;

export const BackgroundGradiend = styled("div")`
  background-color: rgba(2, 15, 8, 0.5);
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    height: 287px;
    opacity: 0.75;

    background-image: linear-gradient(rgba(0, 24, 38, 1), rgba(0, 37, 49, 0));
  }
`;

export const UpContent = styled("div")`
  position: relative;
  z-index: 100;
`;
