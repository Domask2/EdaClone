import React, { useEffect, useState } from "react";

import styled from "styled-components";
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

const optionsAll = [
  { value: "all", label: "Любая категория" },
  { value: "semis", label: "Загатовки" },
  { value: "main", label: "Основные блюда" },
  { value: "pasta", label: "Паста и пицца" },
  { value: "snacks", label: "Закуски" },
  { value: "soup", label: "Супы" },
  { value: "salad", label: "Салаты" }
];

const semisInit = [
  { value: "semisAll", label: "Любое блюдо" },
];

const semis = [
  { value: "semisAll", label: "Любое блюдо" },
  { value: "varenie", label: "Варенье" },
  { value: "salenie", label: "Саленье" },
];

const main = [
  { value: "semisAll", label: "Любое блюдо" },
  { value: "patate", label: "Картошка" },
  { value: "pick", label: "Свинина" },
];

export const FilterMenu: React.FC<FilterMenuProps> = ({ toggleFilter }) => {


const [ menuAll, setMenuAll ] = useState('');

const [ menuSemis, setMenuSemis ] = useState('');

const renderSwitch = (param:string) => {
  switch(param) {
    case 'semis':
      return <FilterSelector optionsMenu={semis} filterMenu={setMenuSemis} placeholder={'Любые блюда'}/>
    case 'main':
      return <FilterSelector optionsMenu={main} filterMenu={setMenuSemis} placeholder={'Любые блюда'}/>
    case 'all':
      setMenuAll('all');
      return <FilterSelector value={''} filterMenu={setMenuSemis} disabled={true} placeholder={'Любые блюда'}/>
    default:
      return <FilterSelector optionsMenu={semisInit} filterMenu={setMenuSemis} disabled={true} placeholder={'Любые блюда'}/>
  }
}

console.log(menuAll, menuSemis);

  return (
    <FilterWrapper toggleFilter={toggleFilter}>
      {toggleFilter && (
        <FilterContainer>
                <FilterGroup>
                  <FilterSelector optionsMenu={optionsAll} filterMenu={setMenuAll} placeholder={'Любая категория'}/>
                  {
                    renderSwitch(menuAll)
                  }      
                </FilterGroup>
        </FilterContainer>
      )}
    </FilterWrapper>
  );
};
