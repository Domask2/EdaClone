import React, { useState } from "react";
import { ToogleFilter } from "./ToogleFilter";
import { FilterMenu } from "./FilterMenu";

import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 100;
  width: 100%;
  margin: 0;
  background-color: #fff;
`;

export const FilterTopLine = styled.div`
  width: 100%;
`;

export const Filter: React.FC = () => {
  const [toggleFilter, setToggleFilter] = useState(true);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
    console.log('filter');
  }

  return (
    <FilterWrapper>
      <FilterTopLine>
        <ToogleFilter handleToggleFilter={handleToggleFilter}/>
      </FilterTopLine>
      <FilterMenu toggleFilter={toggleFilter}/>
    </FilterWrapper>
  );
};
