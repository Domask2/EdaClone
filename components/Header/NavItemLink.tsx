import React from "react";
import Link from "next/link";
import {
  ListItem,
  ListItemLink,
} from "../../styles/Header.styled";

import styles from "./Header.module.scss";

type TName = {
  text: string,
  path: string
}
interface NavItemLinkProps {
  name: TName
}

export const NavItemLink: React.FC<NavItemLinkProps> = ({name}) => {
  return (
    <ListItem className={styles.listItem}>
      <Link href={name.path} passHref>
        <ListItemLink>{name.text}</ListItemLink>
      </Link>
    </ListItem>
  );
};
