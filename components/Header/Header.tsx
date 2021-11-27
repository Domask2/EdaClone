import React from "react";
import { StyledHeader } from "../../styles/Header.styled";
import { Container } from "../../styles/Container.styled";

import styles from "./Header.module.scss";

import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { UserBar } from "./UserBar";

export const Header: React.FC = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Nav />
        <UserBar/>
      </StyledHeader>
    </Container>
  );
};
