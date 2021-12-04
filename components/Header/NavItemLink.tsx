import React from "react";
import Link from "next/link";

import { ListItem } from "../List";
import { ListItemLink } from "../Links";

type TName = {
  text: string;
  path: string;
};
interface NavItemLinkProps {
  name: TName;
}

export const NavItemLink: React.FC<NavItemLinkProps> = ({ name }) => {
  return (
    <ListItem>
      <Link href={name.path} passHref>
        <ListItemLink>{name.text}</ListItemLink>
      </Link>
    </ListItem>
  );
};
