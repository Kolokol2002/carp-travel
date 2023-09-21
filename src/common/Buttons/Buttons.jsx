import React from "react";
import { StyledButtonHero } from "./Buttons.styled";

const ButtonHero = ({ refEl }) => {
  const handleClick = () => {
    console.log(refEl);
    refEl.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledButtonHero>
      <button onClick={handleClick}>JOIN NOW</button>
    </StyledButtonHero>
  );
};

export default ButtonHero;