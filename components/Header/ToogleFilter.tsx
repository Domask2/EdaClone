import React from "react";
import { StyledSpanDivider, StyledSpanPlus } from "../Text";

import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  top: 0;
  left: 0;
  z-index: 910;
  width: 100%;

  @media (max-width: 941px) {
    margin-top: 10px;
    top: -10px;
  }

  &::before {
    display: block;
    content: " ";
    flex-grow: 1;
    border-bottom: 1px solid #d9d9d9;
  }

  &::after {
    display: block;
    content: " ";
    flex-grow: 1;
    border-bottom: 1px solid #d9d9d9;
  }
`;

interface ToogleFilterProps {
  handleToggleFilter: () => void;
}

export const ToogleFilter: React.FC<ToogleFilterProps> = ({handleToggleFilter}) => {
  return (
    <ToggleWrapper onClick={handleToggleFilter}>
      <StyledSpanDivider>
        <StyledSpanPlus>+</StyledSpanPlus>
          Подбор рецептов
      </StyledSpanDivider>
    </ToggleWrapper>
  );
};
