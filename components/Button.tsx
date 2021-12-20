import styled from "styled-components";

interface ButtonProps {
  border?: string;
  hoverColor?: string;
  font?: string;
  TT?: boolean;
  letSpace? : string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  backgroundColor? : string
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 3px;
  background: transparent;
  transition: color 0.3s ease-in;
  cursor: pointer;
  padding: ${(props) => (props.padding ? `${props.padding}` : "0 15px")};
  margin: ${(props) => (props.margin ? `${props.margin}` : `0`)};
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : `inherit`)};
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}` : "none")};
  color: ${(props) => (props.color ? `${props.color}` : "inherit")};
  font: ${(props) => (props.font ? `${props.font}` : "8px/38px Roboto, sans-serif")};
  text-transform: ${(props) => (props.TT ? 'uppercase' : "none")};
  letter-spacing: ${(props) => (props.letSpace ? `${props.letSpace}` : "1px")};
  &:hover {
    color: ${(props) => (props.hoverColor ? `${props.hoverColor}` : "none")};
  }
`;
