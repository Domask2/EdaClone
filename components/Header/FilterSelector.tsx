import React, { CSSProperties, useState } from "react";

import Select, { StylesConfig } from 'react-select';
import styled from "styled-components";

import { MdKeyboardArrowDown as IconDown } from 'react-icons/md';

export const SelectButtonStyled = styled.div`
  position: relative;
  width: 165px;
  height: 42px;
  &:first-of-type {
    margin-left: 0px;
  }
`;

export const ContextButton = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right: none rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  cursor: pointer;

  &:hover {
    color: #24af30 !important;
  }

  &:hover button {
    color: #24af30 !important;
  }

  svg {
    position: absolute;
    width: 20px;
    height: 18px;
    right: 0px;
  }
`;

type MyOptionType = {
  label: string;
  value: string;
};

const options: MyOptionType[] = [
  { value: "all", label: "Любая категория" },
  { value: "chocolate", label: "Загатовки" },
  { value: "strawberry", label: "Основные блюда" },
  { value: "strawberry", label: "Паста и пицца" },
  { value: "strawberry", label: "Закуски" },
  { value: "strawberry", label: "Супы" },
  { value: "vanilla", label: "Салаты" }
];

type IsMulti = false;

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
  control: (provided, state ) => ({
    ...provided,
    position: 'relative',
    borderColor: 'rgb(230, 230, 230)',
    boxShadow: 'none',
    background: 'rgb(255, 255, 255)',
    border: '1px solid rgb(230, 230, 230)',
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
    borderRight: 'none rgb(217, 217, 217)',
    borderTopColor: 'rgb(217, 217, 217)',
    borderBottomColor: 'rgb(217, 217, 217)',
    borderLeftColor: 'rgb(217, 217, 217)',
    width: '100%',
    padding: '0 0 0 15px',
    height: '42px',
    font: '12px/40px PT Sans,Helvetica,sans-serif',
    cursor: 'pointer',
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
    marginRight: '17px',
  }),

  singleValue: (provided) => ({
    ...provided,
    marginRight: '17px',
  }),

  indicatorSeparator: () => ({
    width: '0',
  }),

  indicatorsContainer: (provided) => ({
    'svg': {
      width: '18px',
      height: '18px',
      color: 'hsl(0, 0%, 40%)',
    },

  }),

  menu: (provide) => ({
    ...provide,
    font: '12px/40px PT Sans,Helvetica,sans-serif',
    'div div': {
      marginBottom: '-25px',
      '&:first-child': {
        backgroundColor: 'white',
      },
        '&:hover, &:active, &:focus': {
          backgroundColor: 'white',
          color: '#af212b',
    }
    }
  
  })
};


export const FilterSelector: React.FC = () => {
  const [categories, setCategories] = useState(null);

  const onChange = (selectedOption: any) => {
    setCategories(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  console.log(categories)
  return (
    <Select
      options={options}
      styles={selectStyle}
      placeholder='Любая категория'
      onChange={onChange}
    />
  );
};
