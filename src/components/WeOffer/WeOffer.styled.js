import styled from "styled-components";

export const WeOfferComponent = styled.section`
  & h2 {
    margin-bottom: 24px;
    @media (min-width: 768px) {
      margin-bottom: 36px;
    }
  }
  @media (min-width: 768px) {
    position: relative;
    & > div > div {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      align-content: space-between;
      flex-wrap: wrap;
      max-height: 389px;
    }
  }
`;

export const CountSlides = styled.span`
  display: block;
  font-size: 43px;
  font-weight: 100;
  line-height: 52px;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.2);
  text-align: right;

  margin-bottom: 16px;

  & span {
    /* display: inline-block; */
    font-weight: 200;
    color: rgba(255, 255, 255, 1);
  }
  @media (min-width: 768px) {
    font-size: 67px;
    position: absolute;
    top: 0;
    right: 0;
    margin-bottom: 0;
    margin-top: 15px;
  }
`;

export const ImageSlideContainer = styled.div`
  margin-bottom: 12px;
  @media (min-width: 768px) {
    /* display: block; */
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    width: 463px;
    height: 370px;
    margin-bottom: 0;
    order: 1;
    /* align-self: flex-start; */
  }
`;

export const UnderImageText = styled.p`
  font-size: 12px;
  font-weight: 200;
  line-height: 24px;
  letter-spacing: 0.2em;
  margin-bottom: 24px;
  text-align: right;

  @media (min-width: 768px) {
    /* display: inline; */
    width: fit-content;
    text-align: start;
    order: 3;
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0em;

  @media (min-width: 768px) {
    /* width: 100%; */
    width: 201px;
    /* flex-basis: 30px; */
    font-size: 12px;
    order: 4;
  }
`;

export const NameList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 34px;
  max-width: 203px;

  & li:nth-child(${(prop) => prop.id}) {
    font-weight: 500;
    opacity: 1;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: inline-block;
      background-image: url("/images/slides/dot_icon.svg");
      width: 9px;
      height: 9px;
      margin-right: 8px;
    }
    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
  @media (min-width: 768px) {
    order: 2;
  }
`;

export const Name = styled.li`
  font-size: 20px;
  font-weight: 200;
  line-height: 17px;
  letter-spacing: 0em;
  text-transform: uppercase;
  opacity: 50%;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 22px;
    width: fit-content;
  }
`;
