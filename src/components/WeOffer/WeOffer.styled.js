import styled from "styled-components";

export const WeOfferComponent = styled.section`
  & h2 {
    margin-bottom: 24px;
    @media (min-width: 768px) {
      margin-bottom: 36px;
    }
    @media (min-width: 1280px) {
      margin-bottom: 23px;
    }
  }
  @media (min-width: 768px) {
    position: relative;
    overflow: hidden;

    & .swiper {
      overflow: visible;
    }
    & > div > div > div > div {
      display: flex;
      flex-direction: column;
      align-content: space-between;
      flex-wrap: wrap;
      max-height: 389px;
      width: 100%;
      @media (min-width: 1280px) {
        align-content: baseline;
      }
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
    color: rgba(255, 255, 255, 1);
  }
  @media (min-width: 768px) {
    font-size: 67px;
    position: absolute;
    top: -100px;
    right: 0;
  }

  @media (min-width: 1280px) {
    font-size: 98px;

    & span {
    }
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

  @media (min-width: 1280px) {
    width: 607px;
    height: 429px;
    margin-right: 20px;
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
    color: rgba(255, 255, 255, 0.6);
    width: fit-content;
    text-align: start;
    order: 3;
  }
  @media (min-width: 1280px) {
  }
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0em;
  @media (min-width: 768px) {
    width: 201px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    order: 4;
  }
  @media (min-width: 1280px) {
    & p {
      white-space: pre-wrap;
      height: 100%;
    }
    /* display: flex; */
    width: auto;
    height: 100px;
    max-width: 292px;
    /* flex-grow: 1; */
    /* flex-shrink: 1; */
    /* flex-basis: 292px; */
    /* flex-flow: nowrap; */
    font-size: 18px;
    line-height: 24px;
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
      background-image: url("/carp-travel/images/slides/dot_icon.svg");
      width: 9px;
      height: 9px;
      margin-right: 8px;
    }
    @media (min-width: 768px) {
      font-size: 22px;
    }
    @media (min-width: 1280px) {
      font-size: 28px;
    }
  }
  @media (min-width: 768px) {
    order: 2;
  }
  @media (min-width: 1280px) {
    max-width: 253px;
    margin-bottom: 140px;
    margin-right: 60px;
    /* height: 100%; */
  }
`;

export const Name = styled.li`
  font-size: 20px;
  font-weight: 200;
  line-height: 17px;
  letter-spacing: 0em;
  text-transform: uppercase;
  opacity: 50%;
  cursor: pointer;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 22px;
    width: fit-content;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 24px;
  }
`;
