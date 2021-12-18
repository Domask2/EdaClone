import React, { useState } from "react";

import { Navigation } from "./Navigation";
import { UserBar } from "./UserBar";
import { SearchForm } from "./SearchForm";
import { Overlay } from "./Overlay";

import styled from "styled-components";
import { Filter } from "./FilterMenu/Filter";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.headerText};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  @media (max-width: 941px) {
  }
`;

export const NavConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Header: React.FC = () => {
  const [search, setSearch] = useState(false);

  const searchOpen = () => {
    setSearch(true);
  };

  const searchClose = () => {
    setSearch(false);
  };

  return (
    <StyledHeader>
      <Container>
        <NavConteiner>
          {!search && (
            <>
              <Navigation />
              <UserBar searchOpen={searchOpen} />
              <Filter />
            </>
          )}

          {search && (
            <>
              <SearchForm searchClose={searchClose} />
              <Overlay />
            </>
          )}
        </NavConteiner>
      </Container>
    </StyledHeader>
  );
};
