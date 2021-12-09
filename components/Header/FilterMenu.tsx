import React from "react";

import styled from "styled-components";


interface FilterMenuWrapperProps {
  toggleFilter: boolean;
}

interface FilterMenuProps {
  toggleFilter: boolean
}

export const FilterMenuWrapper = styled.div<FilterMenuWrapperProps>`
    display: block;
    height: ${props => props.toggleFilter ? '80px' : '0'}; 
    overflow: ${props => props.toggleFilter ? 'visible' : 'hidden'}; 
    opacity: ${props => props.toggleFilter ? '1' : '0'}; 
    transition: all .8s ease-out;
`;

export const FilterSection = styled.section`
    position: relative;
    z-index: 900;
`;

export const FilterSectionWrapper = styled.section`
    padding: 18px 0 19px;
    border-bottom: 1px solid #d9d9d9;
`;

export const FilterSectionPad = styled.section`
    width: 1000px;
    margin: 0 auto;
`;

export const FilterMenu: React.FC<FilterMenuProps> = ({toggleFilter}) => {
  console.log(toggleFilter);
  return (
    <FilterMenuWrapper toggleFilter={toggleFilter}>
        {
          toggleFilter && (
            <FilterSection>
                <FilterSectionWrapper>
                  <FilterSectionPad>

                  </FilterSectionPad>
                </FilterSectionWrapper>
            </FilterSection>
          )
        }

    </FilterMenuWrapper>
  );
};
