import React from "react";
import { StyledButtonHero } from "./Buttons.styled";

const ButtonHero = ({ refEl }) => {
  const handleClick = () => {
    refEl.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledButtonHero>
      <button onClick={handleClick}>
        <div>JOIN NOW</div>
      </button>
    </StyledButtonHero>
  );
};

export default ButtonHero;
