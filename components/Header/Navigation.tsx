import React from "react";
import { NavItemLink } from "./NavItemLink";
import { NavStyled, List, ListItem, ListItemLink } from "../../styles/Header.styled";

import styles from "./Header.module.scss";

const menu = ['Рецепты', 'ЖУРНАЛ «ЕДА» №74 (136)', 'ШКОЛА «ЕДЫ»', 'Идеи', 'Авторы', 'База'];

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
