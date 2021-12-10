import React from "react";

import styled from "styled-components";
import { theme } from "../theme";
import { Button } from "./Button";
import { MdKeyboardArrowDown as IconDown } from 'react-icons/md';

interface SelectButtonProps {
  children: any;
}

export const SelectButtonStyled = styled.div<SelectButtonProps>`
  position: relative;
  width: 165px;
  height: 42px;
  &:first-of-type {
    margin-left: 0px;
  }
`;

export const ContextButton = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right: none rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  cursor: pointer;

  &:hover {
    color: #24af30 !important;
  }

  &:hover button {
    color: #24af30 !important;
  }

  svg {
    position: absolute;
    width: 20px;
    height: 18px;
    right: 0px;
  }
`;


export const SelectButton: React.FC<SelectButtonProps> = ({ children}) => {
  return (
    <SelectButtonStyled>
      <ContextButton>
        <Button
          style={{ letterSpacing: 0 }}
          hoverColor={theme.colors.borderMenuHover}
          font={theme.fontBtn.select}
        >
          {children} <IconDown/>
        </Button>
      </ContextButton>
    </SelectButtonStyled>
  );
};
