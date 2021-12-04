import styled, { css } from "styled-components";

interface StyledSpanProps {
  hideMedia?: string;
  hover?: string;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  font-size: 8px;
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.1s ease-in;

  ${(props) =>
    props.hideMedia &&
    css`
      @media (max-width: ${props.hideMedia}) {
        font-size: 0;
        line-height: 0;
        letter-spacing: 0;
       }`
    }

${(props) =>
    props.hover &&
    css`
      &:hover {
        color: ${props.hover};
      }
     `
    }
`;
