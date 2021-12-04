import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.headerText};
  z-index: 951;
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


