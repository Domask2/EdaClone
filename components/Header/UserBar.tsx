import React from "react";
import Link from "next/link";

import { theme } from "../../theme";

import { ListItemLink } from "../Links";
import { List, ListItem } from "../List";
import { Button } from "../Button";
import { StyledSvg } from "../Svg";
import { StyledSpan } from "../Text";

import styled from "styled-components";

export const UserBarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  li {
    padding: 0 18px;
    font-size: 11px;
  }
  @media (max-width: 941px) {
    margin-top: 0;
    margin-bottom: 20px;
    justify-content: center;
  }
`;
interface UserBarProps {
  searchOpen: () => void;
}

export const UserBar: React.FC<UserBarProps> = ({ searchOpen }) => {
  return (
    <UserBarStyled>
      <List>
        <Button onClick={searchOpen}>
          <StyledSvg width="17px" height="17px" fill="#24af30" mr="11px">
            <path d="M18.002 17.324l-.678.678-4.022-4.022A7.96 7.96 0 0 1 8 16a8 8 0 1 1 8-8c0 2.037-.767 3.89-2.021 5.302l4.023 4.022zM15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
          </StyledSvg>

          <StyledSpan hideMedia="1280px">поиск по сайту</StyledSpan>
        </Button>

        <ListItem borderLeft={true}>
          <Link href="/" passHref>
            <ListItemLink $mode='light'>
              <StyledSvg
                viewBox="0 0 9 14"
                width="13px"
                height="23px"
                fill="#af212b"
              >
                <path
                  d="M8.5 12.566l-3.723-2.482-.277-.185-.277.185L.5 12.566V1h8v11.566z"
                  fillRule="evenodd"
                />
              </StyledSvg>

              <StyledSpan  hideMedia="1200px">моя книга рецептов</StyledSpan>
            </ListItemLink>
          </Link>
        </ListItem>

        <ListItem borderLeft={true}>
          <Button>
            <StyledSvg
              width="22px"
              height="21px"
              viewBox="0 0 42 39.719"
              fill="#24af30"
              mr="6px"
              mt="2px"
            >
              <path d="M29.413 19.878l-1.634 10.829S25.152 33 18.494 33c-6.655 0-9.273-2.293-9.273-2.293L7.588 19.878C3.29 19.199 0 15.489 0 11a9 9 0 0 1 9-9c1.183 0 2.31.234 3.345.649a8.51 8.51 0 0 1 1.967-1.54l.027-.016c.225-.127.456-.242.693-.348.025-.012.049-.025.074-.036.22-.096.447-.18.677-.258.043-.014.085-.033.129-.047.214-.068.435-.123.656-.175.061-.014.12-.034.182-.047.216-.045.437-.076.659-.104.069-.009.136-.024.205-.032a8.643 8.643 0 0 1 1.772 0c.069.008.136.023.205.032.222.028.443.059.659.104.062.013.121.033.182.047.221.052.442.107.656.175.044.014.086.033.129.047.23.078.457.162.677.258.025.011.049.024.074.036.237.106.468.221.693.348l.027.016a8.51 8.51 0 0 1 1.967 1.54A8.964 8.964 0 0 1 28 2a9 9 0 0 1 9 9c0 4.489-3.29 8.199-7.587 8.878zM28 4c-2.174 0-4.081.919-4.081.919a6.49 6.49 0 0 0-11.91 3.492l-1.984.582C10.015 8.829 10 8.666 10 8.5c0-1.52.404-2.943 1.102-4.177A7 7 0 1 0 9 18c.164 0 .322-.024.483-.035l1.352 11.146S12.997 31 18.495 31c5.5 0 7.67-1.889 7.67-1.889l1.354-11.146c.16.011.317.035.481.035a7 7 0 1 0 0-14z" />
            </StyledSvg>
            <StyledSpan hover="#24af30">Войти</StyledSpan>
          </Button>
        </ListItem>
        <ListItem>
          <Button 
            TT
            hoverColor={theme.colors.borderMenuHover} 
            border={theme.colors.borderMenu}>
              Добавить рецепт
          </Button>
        </ListItem>
      </List>
    </UserBarStyled>
  );
};
