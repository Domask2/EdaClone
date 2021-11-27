import React from "react";
import Link from "next/link";
import {
  ListItem,
  ListItemLink,
} from "../../styles/Header.styled";

import styles from "./Header.module.scss";

interface NavItemLinkProps {
  name: string
}

export const NavItemLink: React.FC<NavItemLinkProps> = ({name}) => {
  return (
    <ListItem className={styles.listItem}>
      <Link href="/recepty" passHref>
        <ListItemLink>{name}</ListItemLink>
      </Link>
    </ListItem>
  );
};
