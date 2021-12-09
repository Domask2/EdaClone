import styled from "styled-components";

interface ButtonProps {
  border?: string;
  hoverColor?: string;
  font?: string;
  TT?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 0 15px;
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  border-radius: 3px;
  background: transparent;
  font: ${(props) => (props.font ? `${props.font}` : "8px/38px Roboto, sans-serif")};
  letter-spacing: 1px;
  transition: color 0.3s ease-in;
  text-transform: ${(props) => (props.TT ? 'uppercase' : "none")};
  &:hover {
    color: ${(props) => (props.hoverColor ? `${props.hoverColor}` : "none")};;
  }
`;
