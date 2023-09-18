import { styled } from "styled-components";

export const StyledButtonHero = styled.div`
  & button {
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
  }

  @media (min-width: 768px) {
    & button {
      width: 230px;
    }
    order: 5;
    display: flex;
    justify-content: end;
  }
  @media (min-width: 1280px) {
    & button {
      width: 294px;
    }
  }
`;
