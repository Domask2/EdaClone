import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.headerText};
  z-index: 951;
`;

export const LogoStyled = styled.div`
  display: block;
  width: 64px;
  height: 40px;
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const UserBarStyled = styled.nav`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  li {
    padding: 0 18px;
    font-size: 11px;
  }
`;

export const List = styled.ul`
  display: inline-flex;
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
  .li:first-of-type {
    padding-left: 0;
  }
`;

export const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  line-height: 40px;
  white-space: nowrap;
  letter-spacing: 1px;
  transition: color 0.3s ease-in;
  &:hover {
    color: #af212b;
  }
`;


