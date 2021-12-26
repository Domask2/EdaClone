import React from "react";

import styled from "styled-components";
import { FilterSelector } from "./FilterSelector";
import { MyOptionType } from "../../../docs/data";

export const FilterIngredientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  margin-bottom: 25px;

  span {
    display: block;
    margin-bottom: 15px;
    font: 700 10px/13px Roboto;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const FilterIngredientItem = styled.div`
  display: inline-block;
  margin: 0 40px 25px 0;
  vertical-align: top;
  font: 0/0 a;
`;

export const FilterSelectorWrapper = styled.div`
  min-height: 42px;
  width: 300px;
  padding: 0 0 7px 8px;
  border-right: none;
  border-radius: 2px;
  background-clip: padding-box;
  text-align: left;
`;

const ingredients: MyOptionType[] = [
  { value: "all", label: "свинина" },
  { value: "semis", label: "картошка" },
  { value: "main", label: "грибы" },
  { value: "pasta", label: "помидор" },
  { value: "all", label: "макароны" },
  { value: "semis", label: "колбаса" },
  { value: "main", label: "рис" },
  { value: "pasta", label: "говядина" },
];

export const FilterIngredients: React.FC = () => {
  return (
    <FilterIngredientWrapper>
      <FilterIngredientItem>
        <span>ВКЛЮЧИТЬ ИНГРЕДИЕНТЫ</span>
        <FilterSelectorWrapper>
          <FilterSelector
            isMultiSelect
            option={ingredients}
            placeHolderSelect={"+Включить"}
            width="100%"
          />
        </FilterSelectorWrapper>
      </FilterIngredientItem>
      <FilterIngredientItem>
        <span>ИСКЛЮЧИТЬ ИНГРЕДИЕНТЫ</span>
        <FilterSelectorWrapper>
          <FilterSelector
            isMultiSelect
            option={ingredients}
            placeHolderSelect={"-Исключить"}
            width="100%"

          />
        </FilterSelectorWrapper>
      </FilterIngredientItem>
    </FilterIngredientWrapper>
  );
};
