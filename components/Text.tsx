import styled, { css } from "styled-components";

interface StyledSpanProps {
  hideMedia?: string;
  hover?: string;
  mr?: string;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  font-size: 8px;
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.1s ease-in;
  margin-right: ${(props) => props.mr};

  ${(props) =>
    props.hideMedia &&
    css`
      @media (max-width: 1200px) {
        font-size: 0;
        line-height: 0;
        letter-spacing: 0;
      }
    `}

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        color: ${props.hover};
      }
    `}
`;

export const StyledSpanDivider = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: -11px;
  padding: 5px 18px;
  font-size: 11px;
  color: #b8b8b8;
  cursor: pointer;
  background: #fff;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: -13px;
    z-index: 10;
    width: 25px;
    height: 25px;
    border-radius: 6px;
    background-clip: padding-box;
    transform: rotate(45deg);
    background: #fff;
    border: 1px solid #fff;
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -13px;
    z-index: 10;
    width: 25px;
    height: 25px;
    border-radius: 6px;
    background-clip: padding-box;
    transform: rotate(45deg);
    background: #fff;
    border: 1px solid #fff;
  }
`;

export const StyledSpanPlus = styled.span`
  position: absolute;
  top: 2px;
  left: 3px;
  display: inline-block;
  z-index: 100;
  font-size: 15px;
  cursor: pointer;
  overflow: hidden;
  margin-right: 5px;
`;
