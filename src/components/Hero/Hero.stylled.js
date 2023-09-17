import styled from "styled-components";

export const HeroComponent = styled.section`
  @media (min-width: 768px) {
    display: flex;

    flex-wrap: wrap;
    max-height: 475px;
    justify-content: space-between;
    flex-direction: column;
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
    & span:nth-child(1) {
    }
    & span:nth-child(2) {
      letter-spacing: 0.13em;
    }
    & span:nth-child(3) {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 1.85em;
    }
  }
`;

export const MainText = styled.h1`
  font-weight: 100;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin-bottom: 24px;

  & span {
    font-weight: 500;
  }

  @media (min-width: 768px) {
    font-size: 67px;
    line-height: 81px;
    order: 1;
    margin-bottom: 68px;
  }
`;

export const LocationText = styled.h2`
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
    & h2 {
      width: 230px;
    }
    order: 4;
    margin-bottom: 41px;
    display: flex;
    justify-content: end;
  }
`;
