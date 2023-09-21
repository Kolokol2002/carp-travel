import { styled } from "styled-components";

export const MainText = styled.h2`
  font-weight: 100;
  font-size: 40px;
  line-height: 31px;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  & span {
    font-weight: 500;
  }
  @media (min-width: 768px) {
    font-size: 67px;
    line-height: 50px;
  }
  @media (min-width: 1280px) {
    font-size: 98px;
    line-height: 73px;
  }
`;
