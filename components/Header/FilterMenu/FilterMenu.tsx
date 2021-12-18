import React, { useState } from "react";

import { FilterSelectGroup } from "./FilterSelectGroup";
import { Button } from "../../Button";

import styled from "styled-components";
import { Input } from "../../Input";

interface FilterMenuWrapperProps {
  toggleFilter: boolean;
}

interface FilterMenuProps {
  toggleFilter: boolean;
}

export const FilterWrapper = styled.div<FilterMenuWrapperProps>`
  width: 100%;
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

export const FilterItem = styled.div`
`;

export const FilterGroupWrapper = styled.div`
  display: flex;
`;

export const FilterGroup = styled.div`
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

export const SearchWrapper = styled.div`
  max-height: 450px;
  width: '100%;
  background-color: white;
  overflow: visible;
  opacity: 1;
  transition: all 0.4s ease 0s;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: center;
  margin-top: 19px;
`;

export const SearchBox = styled.div`
  position: relative;
  margin: 2px 0px;
  flex-grow: 0;
  flex-shrink: 1;
  text-overflow: ellipsis;
  text-align: left;
  display: block;
  min-width: 66.664%;
`;

export const InputIngredient = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  margin-bottom: 25px;
`;

export const FilterMenu: React.FC<FilterMenuProps> = ({ toggleFilter }) => {
  const handleFormSearch = () => {
    console.log('отправка формы')
  }

  const [toggleSearch, setToggleSearch] = useState(true);

  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  }

  return (
    <FilterWrapper toggleFilter={toggleFilter}>
      {toggleFilter && (
        <FilterContainer>

          <FilterItem>
            <FilterGroupWrapper>
              <FilterGroup>
                <FilterSelectGroup />
              </FilterGroup>
              <FilterButtonGroup>
                <Button
                  onClick={handleToggleSearch}
                  style={{ marginRight: '35px', letterSpacing: '0px', borderRadius: '0px', cursor: 'pointer', padding: '0 20px' }}
                  border={'1px solid #d9d9d9'}
                  font={'11px / 38px "Roboto", sans-serif'}
                >
                  Ингредиенты, детали
                </Button>
                <Button
                  onClick={handleFormSearch}
                  style={{ backgroundColor: 'rgb(36, 175, 48)', color: 'white', letterSpacing: '0px', borderRadius: '2px', cursor: 'pointer', padding: '0 20px' }}
                  border={'1px solid #d9d9d9'}
                  font={'11px / 38px "Roboto", sans-serif'}
                >
                  Подобрать рецепты
                </Button>
              </FilterButtonGroup>
            </FilterGroupWrapper>
          </FilterItem>

          <FilterItem>

            {
              toggleSearch && (
                <SearchWrapper>
                  <SearchContainer>
                    <SearchBox>
                      <InputIngredient>
                        <div>
                          <span>ВКЛЮЧИТЬ ИНГРЕДИЕНТЫ</span>
                          <input />
                        </div>
                        <div>
                          <span>ИСКЛЮЧИТЬ ИНГРЕДИЕНТЫ</span>
                          <input />
                        </div>
                      </InputIngredient>
                    </SearchBox>
                  </SearchContainer>
                </SearchWrapper>
              )
            }

          </FilterItem>


        </FilterContainer>

      )
      }
    </FilterWrapper >
  );
};
