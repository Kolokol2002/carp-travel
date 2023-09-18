import styled from "styled-components";

export const HeroComponent = styled.section`
  & h2 {
    margin-bottom: 24px;
    @media (min-width: 768px) {
      margin-bottom: 68px;
      order: 1;
    }
    @media (min-width: 1280px) {
      margin-bottom: 119px;
    }
  }
  @media (min-width: 768px) {
    display: flex;

    flex-wrap: wrap;
    max-height: 475px;
    justify-content: space-between;
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    max-height: 670px;
  }
`;

export const SecondaryText = styled.div`
  display: flex;
  justify-content: end;
  font-size: 37px;
  line-height: 45px;
  text-transform: uppercase;
  margin-bottom: 24px;
  margin-right: -7px;

  & span:nth-child(1) {
    font-weight: 500;
    letter-spacing: 0em;
  }
  & span:nth-child(2) {
    font-weight: 100;
    letter-spacing: 0.045em;
  }
  & span:nth-child(3) {
    display: block;
    font-size: 12px;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: 0.8em;
  }

  @media (min-width: 768px) {
    font-size: 67px;
    line-height: 81px;
    order: 3;
    margin-bottom: 56px;
    margin-right: -17px;

    & span:nth-child(2) {
      letter-spacing: 0.13em;
    }
    & span:nth-child(3) {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 1.85em;
      width: fit-content;
    }
  }
  @media (min-width: 1280px) {
    font-size: 98px;
    line-height: 119px;
    margin-bottom: 181px;
    margin-right: -38px;
    & span:nth-child(3) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.62em;
    }
  }
`;

export const LocationText = styled.h3`
  font-size: 10px;
  font-weight: 200;
  line-height: 16px;
  letter-spacing: 0em;
  width: 157px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.09em;
    width: 270px;

    order: 2;
    margin-bottom: 0;
  }
`;

export const UsText = styled.div`
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0em;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    & h3 {
      width: 230px;
    }
    order: 4;
    margin-bottom: 41px;
    display: flex;
    justify-content: end;
  }
  @media (min-width: 1280px) {
    & h3 {
      width: 294px;
    }
    margin-bottom: 61px;
  }
`;
