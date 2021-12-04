import styled from "styled-components";

export const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  line-height: 40px;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: color 0.3s ease-in;

  color :${({ theme }) => theme.colors.nav};
  text-decoration: none;

  &:hover {
    color: #af212b;
  }
`;
