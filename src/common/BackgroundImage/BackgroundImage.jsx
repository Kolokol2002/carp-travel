import React from "react";
import {
  BackgroundGradiend,
  BackgroundMain,
  UpContent,
} from "./BackgroundImage.styled";

const BackgroundImage = ({ children, src }) => {
  return (
    <BackgroundMain src={src}>
      <BackgroundGradiend>
        <UpContent>{children}</UpContent>
      </BackgroundGradiend>
    </BackgroundMain>
  );
};

export default BackgroundImage;
