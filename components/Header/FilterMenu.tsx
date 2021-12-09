import React from "react";
import { Input } from "../Input";

import styled from "styled-components";
import { SelectButton } from "../Select";

interface FilterMenuWrapperProps {
  toggleFilter: boolean;
}

interface FilterMenuProps {
  toggleFilter: boolean;
}

export const FilterMenuWrapper = styled.div<FilterMenuWrapperProps>`
  display: flex;
  width: 100%;
  background-color: white;
  height: ${(props) => (props.toggleFilter ? "80px" : "0")};
  overflow: ${(props) => (props.toggleFilter ? "visible" : "hidden")};
  opacity: ${(props) => (props.toggleFilter ? "1" : "0")};
  transition: all 0.4s ease 0s;
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background-color: rgb(217, 217, 217);
  }
`;

export const FilterContainer = styled.div`
  width: 1005px;
  margin-left: auto;
  margin-right: auto;
`;

export const FilterForm = styled.div`
  max-height: 90px;
  overflow: visible;
  opacity: 1;
  transition: all 0.4s ease 0s;
`;

export const FilterSectionPad = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: center;
  position: relative;
  padding: 18px 0px 19px;
`;

export const FilterInputs = styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 1;
  text-overflow: ellipsis;
  text-align: left;
  display: block;
  min-width: 66.664%;
  margin: 0px;
  flex-basis: 66.664% !important;
  overflow: visible !important;
`;

export const FilterGroup = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  flex: 1 1 100%;
  justify-content: flex-start;
`;

export const FilterMenu: React.FC<FilterMenuProps> = ({ toggleFilter }) => {
  return (
    <FilterMenuWrapper toggleFilter={toggleFilter}>
      {toggleFilter && (
        <FilterContainer>
          <FilterForm>
            <FilterSectionPad>
              <FilterInputs>
                <FilterGroup>
                    <SelectButton>
                      {'Любая категория'}
                    </SelectButton>
                    <SelectButton>
                      {'Любое блюдо'}
                    </SelectButton>
                    <SelectButton>
                      {'Любая кухня'}
                    </SelectButton>
                    <SelectButton>
                      {'Любое меню'}
                    </SelectButton>
                </FilterGroup>
              </FilterInputs>
            </FilterSectionPad>
          </FilterForm>
        </FilterContainer>
      )}
    </FilterMenuWrapper>
  );
};
