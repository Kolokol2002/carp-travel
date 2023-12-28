import styled from "@emotion/styled";
import { min, tablet } from "../../styles/media";

export const ChooseUsFirstSection = styled.section`
  position: relative;
`;

export const ContainerTitleSub = styled.div`
  margin-left: auto;
  margin-bottom: 36px;
  width: fit-content;
  ${min(tablet)} {
    margin-left: 0;
  }
`;
export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 36px;
  width: 180px;

  ${min(tablet)} {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 13px;
    width: 220px;
  }
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 200;
  line-height: 36px;
  color: #ffffff;
  width: fit-content;

  text-transform: uppercase;
  ${min(tablet)} {
  }
`;
export const List = styled.ul`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: end;
  width: 180px;
  margin-right: auto;
  ${min(tablet)} {
    gap: 24px;
    width: 225px;
    margin-right: 0;
  }
`;
export const Item = styled.li``;
export const ItemTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  ${min(tablet)} {
    font-size: 16px;
  }
`;
export const ItemSubtitle = styled.p`
  font-size: 12px;
  font-weight: 100;
  line-height: 20px;
  ${min(tablet)} {
  }
`;
export const ContainerContant = styled.div`
  display: flex;
  gap: 20px;
`;
