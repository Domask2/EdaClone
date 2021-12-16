import React from "react";

import Select, { StylesConfig } from 'react-select';

type MyOptionType = {
  label: string;
  value: string;
};

const selectStyle: StylesConfig<MyOptionType> = {
  control: (provided, state) => ({
    ...provided,
    width: '160px',
    position: 'relative',
    borderColor: 'rgb(230, 230, 230)',
    boxShadow: 'none',
    background: 'rgb(255, 255, 255)',
    border: '1px solid rgb(230, 230, 230)',
    borderRadius: '0px',
    borderRight: 'none rgb(217, 217, 217)',
    borderTopColor: 'rgb(217, 217, 217)',
    borderBottomColor: 'rgb(217, 217, 217)',
    borderLeftColor: 'rgb(217, 217, 217)',
    padding: '0 0 0 15px',
    height: '40px',
    font: '12px/40px PT Sans,Helvetica,sans-serif',
    cursor: 'pointer',
    '&:last-of-type': {
      borderRight: '1px solid rgb(217, 217, 217)',
    },
    '&:hover': {
      color: 'black',
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: 'black',
  }),

  input: (provided) => ({
    ...provided,
    margin: '0',
    paddingBottom: '0',
    paddingTop: '0',
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),

  singleValue: (provided) => ({
    ...provided,
    marginRight: '17px',
  }),

  indicatorSeparator: () => ({
    width: '0',
  }),

  indicatorsContainer: () => ({
    'svg': {
      width: '18px',
      height: '18px',
      color: 'hsl(0, 0%, 40%)',
    },
  }),

  menu: (provide) => ({
    ...provide,

    font: '12px/40px PT Sans,Helvetica,sans-serif',
    paddingBottom: '20px',
    'div div': {
      backgroundColor: 'transparent',
      marginBottom: '-25px',
      color: 'black',
      '&:first-of-type': {
        backgroundColor: 'white',
      },
      '&:hover, &:active, &:focus': {
        backgroundColor: 'transparent',
        color: '#af212b',
      }
    }
  })
};

interface FilterSelectProps {
  option?: MyOptionType[],
  handleSelect?: any,
  valueSelect?: null,
  placeHolderSelect?: string,
  disabled?: boolean
}

export const FilterSelector: React.FC<FilterSelectProps> = ({ option, handleSelect, valueSelect, placeHolderSelect, disabled }) => {
  return (
    <Select
      options={option}
      styles={selectStyle}
      onChange={handleSelect}
      value={valueSelect}
      placeholder={placeHolderSelect}
      isDisabled={disabled}
    />
  );
};
