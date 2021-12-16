import React, { useState } from "react";

import { Button } from "../../Button";
import { FilterSelector } from "./FilterSelector";

import styled from "styled-components";
import { FilterSelectGroup } from "./FilterSelectGroup";

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
  display: flex;
  
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 1 1 100%;
`;

export const FilterButtonGroup = styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 1;
  text-overflow: ellipsis;
  display: flex;
  min-width: 33.332%;
  margin: 0px;
  flex-basis: 33.332% !important;
  text-align: right !important;
  justify-content: right !important;
  overflow: visible !important;
`;

export const SearchWrapper = styled.div`
  max-height: 450px;
  background-color: white;
  overflow: visible;
  opacity: 1;
  transition: all 0.4s ease 0s;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 19px;

`;

export const FilterMenu: React.FC<FilterMenuProps> = ({ toggleFilter }) => {
  const handleFormSearch = () => {
    console.log('отправка формы')
  }

  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  }
  
  return (
    <FilterWrapper toggleFilter={toggleFilter}>
      {toggleFilter && (
        <FilterContainer>
          
            <FilterGroup>
              <FilterSelectGroup />
            </FilterGroup>
            <FilterButtonGroup>
              <Button
                onClick={handleToggleSearch}
                style={{ marginRight: '35px', letterSpacing: '0px', borderRadius: '0px', cursor: 'pointer', padding: '0 12px' }}
                border={'1px solid #d9d9d9'}
                font={'12px / 38px "Roboto", sans-serif'}
              >
                Ингредиенты, детали
              </Button>
              <Button
                onClick={handleFormSearch}
                style={{ backgroundColor: 'rgb(36, 175, 48)', color: 'white', letterSpacing: '0px', borderRadius: '2px', cursor: 'pointer', padding: '0 12px' }}
                border={'1px solid #d9d9d9'}
                font={'12px / 38px "Roboto", sans-serif'}
              >
                Подобрать рецепты
              </Button>
            </FilterButtonGroup>
        

        
            {
              toggleSearch && (
                <SearchWrapper>
                  <SearchContainer>
                    dsfssgdfg
                  </SearchContainer>
                </SearchWrapper>
              )
            }
         

        </FilterContainer>

      )
      }
    </FilterWrapper >
  );
};
