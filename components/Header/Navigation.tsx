import React from "react";
import { NavItemLink } from "./NavItemLink";
import { List } from "../List";

import styled from "styled-components";

const menu = [
  { text: "Рецепты", path: "/recepty" },
  { text: "ЖУРНАЛ «ЕДА» №74 (136)", path: "/journal" },
  { text: "ШКОЛА «ЕДЫ»", path: "/school" },
  { text: "Авторы", path: "/author" },
  { text: "База", path: "/base" },
];

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Navigation: React.FC = () => {
  return (
    <NavStyled>
      <List>
        {menu.map((name, id) => (
          <NavItemLink key={id} name={name} />
        ))}
      </List>
    </NavStyled>
  );
};
