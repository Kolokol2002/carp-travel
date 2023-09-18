import { styled } from "styled-components";

export const ContainerMain = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: ${(prop) =>
    prop.home !== undefined ? "36px 20px 56px" : "56px 20px"};

  @media (min-width: 768px) {
    max-width: 769px;
    padding: ${(prop) =>
      prop.home !== undefined ? "24px 32px 64px" : "64px 32px"};
  }
  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: ${(prop) =>
      prop.home !== undefined ? "24px 80px 80px" : "104px"};
  }
`;
