import React, { useState } from "react";
import Link from "next/link";
import { ListItemLink } from "../../../styles/Header.styled";
import { ListItem } from "../../List";
import clsx from "clsx";
import styles from "../Header.module.scss";

export const UserBarSearch: React.FC = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <ListItem>
      {search ? (
        <div className={styles.wrapperForm}>
          <form className={styles.searchBar}>
            <svg viewBox="0 0 18 18" className={styles.searchSvg_loupe}>
              <path d="M18.002 17.324l-.678.678-4.022-4.022A7.96 7.96 0 0 1 8 16a8 8 0 1 1 8-8c0 2.037-.767 3.89-2.021 5.302l4.023 4.022zM15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path>
            </svg>
            <input
              className={styles.searchBar_input}
              type="text"
              autoComplete="off"
              placeholder="Поиск по рецептам, ингредиентам, статьям и в журнале «Еда»"
            />
            <div onClick={handleSearch}>
              <svg viewBox="0 0 16.18 16.18" className={styles.cls1}>
              <path d="M16.194 15.486l-.708.708L8.09 8.797.694 16.194l-.708-.708L7.383 8.09-.014.694l.708-.707L8.09 7.383l7.396-7.396.708.707L8.797 8.09l7.397 7.396z"></path></svg>
            </div>
          </form>
          <div className={clsx(styles.searchOverlay, search && styles.visibleSearch, !search && styles.unVisibleSearch)}></div>
        </div>
      ) : (
        <div onClick={handleSearch}>
          <Link href="/" passHref>
            <ListItemLink>
              <svg viewBox="0 0 18 18" className={styles.searchSvg}>
                <path d="M18.002 17.324l-.678.678-4.022-4.022A7.96 7.96 0 0 1 8 16a8 8 0 1 1 8-8c0 2.037-.767 3.89-2.021 5.302l4.023 4.022zM15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path>
              </svg>
              <span className={styles.userBar__description}>
                поиск по сайту
              </span>
            </ListItemLink>
          </Link>
        </div>
      )}
    </ListItem>
  );
};
