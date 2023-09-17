import { styled } from "styled-components";

export const ContainerMain = styled.div`
  /* min-width: 320px; */
  margin: 0 auto;
  padding: ${(prop) =>
    prop.home !== undefined ? "36px 20px 56px" : "56px 20px"};

  @media (min-width: 768px) {
    padding: ${(prop) =>
      prop.home !== undefined ? "24px 32px 64px" : "64px 32px"};
  }
`;
