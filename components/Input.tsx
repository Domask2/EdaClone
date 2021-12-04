import styled from "styled-components";

interface InputProps {
  width?: string;
}

export const Input = styled.input<InputProps>`
    width: ${props => props.width ? `${props.width}` : '100%'};
    padding: 0px 17px;
    border: none;
    cursor: text;
    font: 16px/40px Roboto,sans-serif;
    &:focus {
      outline: 0;
    }
`;
