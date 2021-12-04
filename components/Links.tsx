import styled, { css } from "styled-components";

interface ListItemLinkProps {
  $mode: string;
}

export const ListItemLink = styled.a<ListItemLinkProps>`
  display: flex;
  align-items: center;
  line-height: 40px;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: color 0.3s ease-in;
  text-decoration: none;
  &:hover {
    color: #af212b;
  }

  ${(props) => {
    switch (props.$mode) {
      case "light":
        return css`
          color: #000000;
          background: transparent;
          font: 8px/38px Roboto, sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          &:hover {
            color: #24af30;
          }
          svg {
            margin-right: 11px;
          }
        `;
      default:
        return css`
          color: ${(props) => props.theme.colors.nav};
        `;
    }
  }}
`;
