import styled from "@emotion/styled";

export const StyledButtonHero = styled.div`
  & button {
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    transition: 0.3s;

    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 15%;
      height: 25%;
      border-top: 1px solid #ffffff;
      border-left: 1px solid #ffffff;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 15%;
      height: 25%;
      border-top: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
    }
    & div {
      height: 100%;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 15%;
        height: 25%;
        border-bottom: 1px solid #ffffff;
        border-left: 1px solid #ffffff;
      }
      ::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 15%;
        height: 25%;
        border-bottom: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
      }
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
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
