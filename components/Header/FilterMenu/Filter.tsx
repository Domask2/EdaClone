import React, { useState } from "react";
import { ToogleFilter } from "../ToogleFilter";
import { FilterMenu } from "./FilterMenu";

import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 100;
  width: 100%;
`;

export const Filter: React.FC = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
  }

  return (
    <FilterWrapper>
      <ToogleFilter handleToggleFilter={handleToggleFilter} />
      <FilterMenu toggleFilter={toggleFilter} />
    </FilterWrapper>
  );
};
