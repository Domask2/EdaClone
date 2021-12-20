import React, { useState } from "react";
import { FilterSelectGroup } from "./FilterSelectGroup";
import { Button } from "../../Button";
import styled from "styled-components";

export const FilterItemSelectWrapper = styled.div`
  display: flex;
`;

export const FilterItemSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 100%;
`;

export const FilterButtonGroup = styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 1;
  text-overflow: ellipsis;
  display: flex;
  min-width: 33.332%;
  height: 40px;
  margin: 0px;
  flex-basis: 33.332% !important;
  text-align: right !important;
  justify-content: right !important;
  overflow: visible !important;
`;

interface FilterGroupProps {
  handleToggleSearch: () => void,
  handleFormSearch: () => void,
}

export const FilterItemSelect: React.FC<FilterGroupProps> = ({ handleToggleSearch, handleFormSearch}) => {
  return (
    <FilterItemSelectWrapper>
      <FilterItemSelectContainer>
        <FilterSelectGroup />
      </FilterItemSelectContainer>
      <FilterButtonGroup>
        <Button
          onClick={handleToggleSearch}
          margin={'0 35px 0 0'}
          padding={'0 20px'}
          letSpace={'0px'}
          border={"1px solid #d9d9d9"}
          borderRadius={'0px'}
          font={'11px / 38px "Roboto", sans-serif'}
        >
          Ингредиенты, детали
        </Button>
        <Button
          onClick={handleFormSearch}
          color={'white'}
          backgroundColor={"rgb(36, 175, 48)"}
          borderRadius={'2px'}
          padding={'0 20px'}
          letSpace={'0px'}
          border={"1px solid #d9d9d9"}
          font={'11px / 38px "Roboto", sans-serif'}
        >
          Подобрать рецепты
        </Button>
      </FilterButtonGroup>
    </FilterItemSelectWrapper>
  );
};
