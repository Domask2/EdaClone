import React from "react";
import Select, { StylesConfig } from "react-select";

type MyOptionType = {
  label: string;
  value: string;
};

const selectStyle: StylesConfig<MyOptionType, false> = {
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    position: "relative",
    borderColor: "rgb(230, 230, 230)",
    boxShadow: "none",
    background: "rgb(255, 255, 255)",
    border: "1px solid rgb(230, 230, 230)",
    borderRadius: "0px",
    borderRight: "none rgb(217, 217, 217)",
    borderTopColor: "rgb(217, 217, 217)",
    borderBottomColor: "rgb(217, 217, 217)",
    borderLeftColor: "rgb(217, 217, 217)",
    padding: "0 0 0 15px",
    height: "40px",
    font: "12px/40px PT Sans,Helvetica,sans-serif",
    cursor: state.isDisabled ? "default" : "pointer",
    "&:last-of-type": {
      borderRight: "1px solid rgb(217, 217, 217)",
    },
    "&:hover": {
      color: "black",
    },
  }),

  container: (provided, state:any) => ({
    ...provided,
    width: state.selectProps.width ? state.selectProps.width : '160px',
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#e3e3e3" : "black",
  }),

  input: (provided) => ({
    ...provided,
    margin: "0",
    paddingBottom: "0",
    paddingTop: "0",
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),

  singleValue: (provided) => ({
    ...provided,
    marginRight: "17px",
  }),

  indicatorSeparator: () => ({
    width: "0",
  }),

  indicatorsContainer: () => ({
    svg: {
      width: "18px",
      height: "18px",
      color: "hsl(0, 0%, 40%)",
    },
  }),

  multiValue: (provided) => ({
    ...provided,
    alignItems: 'center',
    backgroundColor: 'hsl(118deg 48% 53%)',
    height: '23px',
    marginRight: '5px',
    marginTop: '5px',
  }),


  menu: (provide) => ({
    ...provide,
    font: "12px/40px PT Sans,Helvetica,sans-serif",
    div: {},
    "div div": {
      backgroundColor: "transparent",
      marginBottom: "-25px",
      color: "black",

      "&:first-of-type": {
        backgroundColor: "white",
      },
      "&:last-of-type": {},
      "&:hover, &:active, &:focus": {
        backgroundColor: "transparent",
        color: "#af212b",
      },
    },
  }),

};

interface FilterSelectProps {
  option?: MyOptionType[];
  handleSelect?: any;
  valueSelect?: null;
  placeHolderSelect?: string;
  disabled?: boolean;
  isMultiSelect?: boolean;
  componentsSelector? : any,
  styleSelector? : any,
  width?: string
}

export const FilterSelector: React.FC<FilterSelectProps> = ({
  option,
  handleSelect,
  valueSelect,
  placeHolderSelect,
  disabled,
  isMultiSelect,
  componentsSelector,
  width
}) => {
  return (
    <Select
      styles={selectStyle}
      components={componentsSelector}
      options={option}
      onChange={handleSelect}
      value={valueSelect}
      placeholder={placeHolderSelect}
      isDisabled={disabled}
      isMulti={isMultiSelect}
      width={width}
    />
  );
};
