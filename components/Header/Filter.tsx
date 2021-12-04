import React from "react";
import { ToogleFilterMenu } from "./ToogleFilterMenu";

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
  return (
    <FilterWrapper>
      <FilterTopLine>
        <ToogleFilterMenu />
      </FilterTopLine>
    </FilterWrapper>
  );
};
