import React from "react";
import { ContainerMain } from "./Container.styled";

const Container = ({ children, home }) => {
  return <ContainerMain home={home}>{children}</ContainerMain>;
};

export default Container;
