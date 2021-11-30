import React from "react";
import { StyledHeader } from "../../styles/Header.styled";
import { Container } from "../../styles/Container.styled";

import styles from "./Header.module.scss";

import { Logo } from "./Logo";
import { Navigation } from './Navigation';
import { UserBar } from "./UserBar/UserBar";

export const Header: React.FC = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Navigation />
        <UserBar/>
      </StyledHeader>
    </Container>
  );
};
