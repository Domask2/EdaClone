import React, { useState } from "react";

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

const optionsAll = [
  { value: "all", label: "Любая категория" },
  { value: "semis", label: "Загатовки" },
  { value: "main", label: "Основные блюда" },
  { value: "pasta", label: "Паста и пицца" },
  { value: "snacks", label: "Закуски" },
  { value: "soup", label: "Супы" },
  { value: "salad", label: "Салаты" }
];

const semis = [
  { value: "semisAll", label: "Любое блюдо" },
  { value: "varenie", label: "Варенье" },
  { value: "salenie", label: "Саленье" },
];

const main = [
  { value: "mainAll", label: "Любое блюдо" },
  { value: "patate", label: "Картошка" },
  { value: "pick", label: "Свинина" },
];

const initFilter = { value: 'edaAll', label: 'Любое блюдо' };

export const FilterSelector: React.FC = () => {
  const [menuAll, setMenuAll] = useState('all');
  const [menuSemis, setMenuSemis] = useState(initFilter);

  const onChangeMenuAll = (selectedOption: MyOptionType | any) => {
    setMenuAll(selectedOption.value)
    setMenuSemis(initFilter)
    // if(selectedOption.value === 'semis') {
    //   setMenuSemis({value:'semisAll', label: 'Любое блюдо'});
    // } else if(selectedOption.value === 'main') {
    //   setMenuSemis({value:'mainAll', label: 'Любое блюдо'});
    // } else {
    //   setMenuSemis({value:'edaAll', label:'Любое блюдо'})
    // }
  };

  const onChangeProducts = (selectedOption: MyOptionType | any) => {
    setMenuSemis(selectedOption)
  };

  const renderSwitch = (param: string) => {
    switch (param) {
      case 'semis':
        return <Select options={semis} styles={selectStyle} onChange={onChangeProducts} value={null} placeholder={menuSemis.label} />
      case 'main':
        return <Select options={main} styles={selectStyle} onChange={onChangeProducts} value={null} placeholder={menuSemis.label} />
      case 'all':
        return <Select styles={selectStyle} value={null} placeholder={'Любое блюдо'} isDisabled />
    }
  }

  // console.log(menuAll, menuSemis.value)
  return (
    <>
      <Select
        options={optionsAll}
        placeholder={optionsAll[0].label}
        styles={selectStyle}
        onChange={onChangeMenuAll}
      />

      {
        renderSwitch(menuAll)
      }

      <Select
        options={optionsAll}
        placeholder={optionsAll[0].label}
        styles={selectStyle}
        
      />
      <Select
        options={optionsAll}
        placeholder={optionsAll[0].label}
        styles={selectStyle}
        
      />
    </>

  );
};
