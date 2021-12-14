import React, { useState } from "react";

import Select, { StylesConfig } from 'react-select';

type MyOptionType = {
  label: string;
  value: string;
};

// const options: MyOptionType[] = [
//   { value: "all", label: "Любая категория" },
//   { value: "semis", label: "Загатовки" },
//   { value: "main", label: "Основные блюда" },
//   { value: "pasta", label: "Паста и пицца" },
//   { value: "snacks", label: "Закуски" },
//   { value: "soup", label: "Супы" },
//   { value: "salad", label: "Салаты" }
// ];

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
    height: '42px',
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

interface FilterSelectorProps {
  optionsMenu?: MyOptionType[],
  filterMenu: any,
  disabled?: boolean,
  placeholder: string,
  value?: any
}

export const FilterSelector: React.FC<FilterSelectorProps> = ({ optionsMenu, filterMenu, disabled, placeholder, value }) => {
  const onChange = (selectedOption: any) => {
    filterMenu(selectedOption.value);
    // console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      value={value}
      isDisabled={disabled}
      options={optionsMenu}
      styles={selectStyle}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
