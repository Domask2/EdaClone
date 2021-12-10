import React, {CSSProperties} from "react";

import Select, {StylesConfig} from 'react-select';
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
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

const customControlStyles: CSSProperties = {
    color: "white",
    borderColor: "pink"
};

type IsMulti = false;

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {

    control: (provided, state) => ({
        ...provided,
        border: '1px solid red',
        cursor: 'pointer',


    }),
};


export const FilterSelector: React.FC= () => {
    return (
        <Select
            options={options}
            styles={selectStyle}
            placeholder='Любая категория'
        />
    );
};
