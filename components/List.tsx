import styled from "styled-components";

interface ListItemProps {
  borderLeft?: boolean;
}

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  transition: all 0.3s ease-out;
`;

export const ListItem = styled.li<ListItemProps>`
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 10px;
  border-left: ${(props) => (props.borderLeft ? "1px solid #d9d9d9;" : "0")};
  list-style-type: none;
  
  &:last-child {
    padding-left: 0;
  }
`;