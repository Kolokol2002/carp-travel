import styled from "@emotion/styled";
import { desktop, min, tablet } from "../../styles/media";

export const ContactContainer = styled.div`
  margin-bottom: 56px;
  ${min(tablet)} {
    margin-bottom: 64px;
  }
  ${min(desktop)} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 104px;
  }
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;

  ${min(tablet)} {
    margin-bottom: 64px;
  }

  ${min(desktop)} {
    margin-bottom: 0;
  }
`;

export const ContactListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: end;

  & li:nth-child(-n + 2) {
    flex-direction: row-reverse;
    justify-content: start;
    & > span {
      width: 81px;
    }
  }

  & li:nth-child(3) {
    & > div {
      width: 81px;
    }
  }

  ${min(tablet)} {
    margin-left: 34px;
    align-items: start;
    flex-wrap: wrap;
    height: 96px;

    & li:nth-child(-n + 2) {
      & > span {
        width: auto;
      }
    }

    & li:nth-child(3) {
      & > div {
        width: auto;
        text-align: start;
      }
    }
  }

  ${min(desktop)} {
    margin-left: 141px;
    height: 0;
    flex-wrap: nowrap;

    & li:nth-child(3) {
      flex-direction: row-reverse;
      & > div {
        width: 210px;
        text-align: end;
      }
    }

    & li:nth-child(1) {
      margin-bottom: 64px;
    }

    & li:nth-child(2) {
      margin-bottom: 124px;
    }
  }
`;

export const ContactListInfoItem = styled.li`
  display: flex;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  & > span {
    font-size: 12px;
    font-weight: 200;
    line-height: 20px;
  }

  ${min(tablet)} {
    & div {
      width: 188px;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      text-align: end;
    }
  }

  ${min(desktop)} {
    & div {
      width: 210px;
      font-size: 18px;
    }
  }
`;
