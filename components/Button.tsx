import styled from "styled-components";

interface ButtonProps {
  border?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 0 15px;
  border: ${(props) => (props.border ? "1px solid #24af30" : "none")};
  border-radius: 3px;
  background: transparent;
  font: 8px/38px Roboto, sans-serif;
  letter-spacing: 1px;
  transition: color 0.3s ease-in;
  text-transform: uppercase;
  &:hover {
    color: #24af30;
  }
`;
