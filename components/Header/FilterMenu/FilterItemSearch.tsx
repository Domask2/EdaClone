import React from "react";
import { FilterIngredients } from "./FilterIngredients";

import styled from "styled-components";

export const FilterItemSearchWrapper
= styled.div`
  width: 1005px;
  display: flex;
  justify-content: start;
  margin: 0 auto;
  overflow: visible;
  opacity: 1;
  transition: all 0.4s ease 0s;
`;

export const FilterItemSearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: center;
  margin-top: 19px;
`;

export const FilterSearchBox = styled.div`
  position: relative;
  margin: 2px 0px;
  flex-grow: 0;
  flex-shrink: 1;
  text-overflow: ellipsis;
  text-align: left;
  display: block;
  min-width: 66.664%;
`;

export const FilterItemSearch: React.FC = () => {
  return (
    <FilterItemSearchWrapper>
      <FilterItemSearchContainer>
        <FilterSearchBox>
          <FilterIngredients/>
        </FilterSearchBox>
      </FilterItemSearchContainer>
    </FilterItemSearchWrapper>

  );
};
