import React from "react";
import { MainText } from "./MainTitle.styled";

const MainTitle = ({ children, className }) => {
  return <MainText className={className}>{children}</MainText>;
};

export default MainTitle;
