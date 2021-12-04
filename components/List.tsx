import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;
`;

interface ListItemProps {
  borderLeft?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 10px;
  border-left: ${(props) => (props.borderLeft ? "1px solid #d9d9d9;" : "0")};
  &:last-child {
    padding-left: 0;
  }
`;