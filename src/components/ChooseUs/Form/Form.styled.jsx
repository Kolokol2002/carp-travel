import styled from "@emotion/styled";
import { min, tablet } from "../../../styles/media";

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;

  width: 180px;
  margin-left: auto;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${min(tablet)} {
    flex-wrap: wrap;
    height: 336px;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.span`
  font-size: 12px;
  font-weight: 200;
  line-height: 24px;
  letter-spacing: 0.2em;
  margin-bottom: 4px;
`;

export const InputStyled = styled.input`
  background-color: #ffffff0d;

  height: ${({ message }) => (message ? "200px" : "auto")};

  padding: 8px;
  &::placeholder {
    font-size: 13px;
    font-weight: 200;
    line-height: 24px;
    opacity: 0.4;
  }

  &:hover,
  &:focus {
    background: #ffffff1a;
  }
`;

export const TextAreaStyled = styled.textarea`
  background-color: #ffffff0d;

  height: 200px;

  padding: 8px;
  &:hover,
  &:focus {
    background: #ffffff1a;
  }
`;

export const LabelCheckboxStyled = styled.label`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  margin-top: 10px;

  & input:checked {
    & + div {
      span {
        opacity: 1;
      }
    }
  }
`;

export const LabelCheckboxText = styled.span`
  font-size: 12px;
  font-weight: 200;
  line-height: 22px;
`;

export const InputCheckboxStyled = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
export const CustomCheckBox = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px;
  border: 1px solid #ffffff;
  transition: border 0.3s ease;
  box-sizing: border-box;

  & span {
    position: relative;
    z-index: 0;
    display: block;
    background-color: #ffffff;
    opacity: 0.1;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    transition: opacity cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  }
`;
export const ButtonForm = styled.button`
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  margin-left: auto;
  margin-top: 10px;
`;

export const ErrorMessageText = styled.span`
  position: absolute;
  right: 0;
  bottom: -20px;
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 0.2em;
  color: #ff5757;

  &::before {
    content: "";
    display: inline-block;
    background-image: url("/carp-travel/images/errorIcon.svg");
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`;
