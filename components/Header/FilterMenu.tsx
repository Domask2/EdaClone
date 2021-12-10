import React from "react";
import { Input } from "../Input";

import styled from "styled-components";
import { SelectButton } from "../Select";
import {FilterSelector} from "./FilterSelector";

interface FilterMenuWrapperProps {
  toggleFilter: boolean;
}

interface FilterMenuProps {
  toggleFilter: boolean;
}

export const FilterWrapper = styled.div<FilterMenuWrapperProps>`
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
  padding: 18px 0px 19px;
`;


export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 1 1 100%;
`;

export const FilterMenu: React.FC<FilterMenuProps> = ({ toggleFilter }) => {
  return (
    <FilterWrapper toggleFilter={toggleFilter}>
      {toggleFilter && (
        <FilterContainer>
                <FilterGroup>
                  <FilterSelector/>
                    {/*<SelectButton>*/}
                    {/*  {'Любая категория'}*/}
                    {/*</SelectButton>*/}
                    {/*<SelectButton>*/}
                    {/*  {'Любое блюдо'}*/}
                    {/*</SelectButton>*/}
                    {/*<SelectButton>*/}
                    {/*  {'Любая кухня'}*/}
                    {/*</SelectButton>*/}
                    {/*<SelectButton>*/}
                    {/*  {'Любое меню'}*/}
                    {/*</SelectButton>*/}
                </FilterGroup>
        </FilterContainer>
      )}
    </FilterWrapper>
  );
};
