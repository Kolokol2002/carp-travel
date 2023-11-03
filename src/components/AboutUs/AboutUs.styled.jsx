import styled from "@emotion/styled";

export const AboutUsComponent = styled.section`
  & h2 {
    margin-bottom: 8px;
    @media (min-width: 768px) {
      display: inline;
      margin: 0;
    }
    @media (min-width: 1280px) {
      margin-right: 24px;
      height: fit-content;
      margin-bottom: 200px;
    }
  }
  @media (min-width: 768px) {
    & > div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: end;
      align-content: space-between;
      max-height: 500px;
      margin-bottom: 64px;
    }
    & > div div {
      order: 3;
    }
    & > p {
      order: 4;
      width: 463px;
      margin-left: auto;
    }
  }

  @media (min-width: 1280px) {
    position: relative;
    & > div {
      max-height: 602px;
    }
    & > div div {
      margin-right: 200px;
      margin-top: 15px;
    }
    & > p {
      width: 605px;
      margin-left: 0;
      order: 2;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.7);

  width: 180px;
  margin-bottom: ${(prop) => (prop.mb !== undefined ? `${prop.mb}px` : 0)};

  & span {
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  @media (min-width: 768px) {
    font-size: 16px;
    width: 220px;
    margin-bottom: ${(prop) =>
      prop.mb !== undefined && prop.mb !== 40 ? `16px` : 0};
  }

  @media (min-width: 1280px) {
    line-height: 24px;
    font-size: 18px;
    width: 292px;
    margin-bottom: ${(prop) =>
      prop.mb !== undefined && prop.mb !== 40 ? `24px` : 0};
  }
`;

export const SecondaryText = styled.h3`
  display: flex;
  width: fit-content;
  flex-direction: column;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  text-transform: uppercase;
  margin-left: auto;
  margin-bottom: 40px;
  align-items: end;

  & span:nth-of-type(1) {
    align-self: flex-start;
  }

  & span:nth-of-type(3) {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 200;
    letter-spacing: -0.01em;
    text-transform: lowercase;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    order: 2;
    margin: 0;
    height: 355px;
    justify-content: end;
  }
  @media (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: 0;
    height: auto;
    order: 0;
    font-size: 18px;
    line-height: 24px;

    & span:nth-of-type(3) {
      letter-spacing: 0.12em;
    }
  }
`;
