import React, { useState } from "react";
import { FilterItemSelect } from "./FilterItemSelect";
import { FilterItemSearch } from './FilterItemSearch';

import styled from "styled-components";
interface FilterMenuWrapperProps {
  toggleFilter: boolean;
}
interface FilterMenuProps {
  toggleFilter: boolean;
}

export const FilterWrapper = styled.div<FilterMenuWrapperProps>`
  width: 100%;
  /* height: ${(props) => (props.toggleFilter ? "80px" : "0")}; */
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

export const FilterItemSearchWrapepr = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  top: 78px;
  right: 0;
  margin: 0 auto;
`;

export const FilterMenu: React.FC<FilterMenuProps> = ({ toggleFilter }) => {
  const [toggleSearch, setToggleSearch] = useState(true);

  const handleFormSearch = () => {
    console.log("отправка формы");
  };

  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  return (
    <FilterWrapper toggleFilter={toggleFilter}>
      {toggleFilter && (
        <FilterContainer>
          <div>
            <FilterItemSelect
              handleToggleSearch={handleToggleSearch}
              handleFormSearch={handleFormSearch}
            />
          </div>

          <div>
            <FilterItemSearchWrapepr>
              {toggleSearch && (
                <FilterItemSearch/>
              )}
            </FilterItemSearchWrapepr>
          </div>
        </FilterContainer>
      )}
    </FilterWrapper>
  );
};
