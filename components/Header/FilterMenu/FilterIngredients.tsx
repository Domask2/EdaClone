import React from "react";

import styled from "styled-components";

export const FilterIngredientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  margin-bottom: 25px;
`;

export const FilterIngredients: React.FC = () => {
  return (
    <FilterIngredientWrapper>
      <div>
        <span>ВКЛЮЧИТЬ ИНГРЕДИЕНТЫ</span>
        <input />
      </div>
      <div>
        <span>ИСКЛЮЧИТЬ ИНГРЕДИЕНТЫ</span>
        <input />
      </div>
    </FilterIngredientWrapper>
  );
};
