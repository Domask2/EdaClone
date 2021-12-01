import React from "react";
import { NavItemLink } from "./NavItemLink";
import { NavStyled, List, ListItem, ListItemLink } from "../../styles/Header.styled";

import styles from "./Header.module.scss";

const menu = [
  { text: "Рецепты", path: "/recepty" },
  { text: "ЖУРНАЛ «ЕДА» №74 (136)",  path: "/journal" },
  { text: "ШКОЛА «ЕДЫ»", path: "/school" },
  { text: "Авторы", path: "/author" },
  { text: "База", path: "/base" },

];

export const Navigation: React.FC = () => {
  return (
    <NavStyled>
      <List>
        {
          menu.map((name, id) => (
            <NavItemLink key={id} name={name}/>
          ))
        }
      </List>
    </NavStyled>
  );
};
