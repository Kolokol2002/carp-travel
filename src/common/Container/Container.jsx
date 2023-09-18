import React from "react";
import { ContainerMain } from "./Container.styled";
import { Element } from "react-scroll";

const Container = ({ children, home, name }) => {
  return (
    <Element name={name}>
      <ContainerMain home={home}>{children}</ContainerMain>
    </Element>
  );
};

export default Container;
