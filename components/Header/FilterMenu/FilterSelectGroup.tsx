import React, { useState } from "react";
import { FilterSelector } from "./FilterSelector";
import { MyOptionType } from "../../../docs/data";

import {
  initFilter,
  semis,
  main,
  pasta,
  categories,
  kitchen,
  menu,
} from "../../../docs/data";

export const FilterSelectGroup: React.FC = () => {
  const [menuCategories, setMenuCategories] = useState("allCategories");
  const [menuDish, setMenuDish] = useState(initFilter);
  const [menuKitchen, setMenuKitchen] = useState("allKitchen");
  const [menuAll, setMenuAll] = useState("allMenu");

  const onChangeMenuCategories = (selectedOption: MyOptionType | any) => {
    setMenuCategories(selectedOption.value);
    setMenuDish(initFilter);
  };

  const onChangeDish = (selectedOption: MyOptionType | any) => {
    setMenuDish(selectedOption);
  };

  const onChangeKitchen = (selectedOption: MyOptionType | any) => {
    setMenuKitchen(selectedOption.value);
  };

  const onChangeAll = (selectedOption: MyOptionType | any) => {
    setMenuAll(selectedOption.value);
  };

  const renderSwitch = (param: string) => {
    switch (param) {
      case "semis":
        return (
          <FilterSelector
            option={semis}
            handleSelect={onChangeDish}
            valueSelect={null}
            placeHolderSelect={menuDish.label}
          />
        );
      case "main":
        return (
          <FilterSelector
            option={main}
            handleSelect={onChangeDish}
            valueSelect={null}
            placeHolderSelect={menuDish.label}
          />
        );
      case "pasta":
        return (
          <FilterSelector
            option={pasta}
            handleSelect={onChangeDish}
            valueSelect={null}
            placeHolderSelect={menuDish.label}
          />
        );
      default:
        return (
          <FilterSelector
            valueSelect={null}
            placeHolderSelect={"Любое блюдо"}
            disabled
          />
        );
    }
  };

  return (
    <>
      <FilterSelector
        option={categories}
        placeHolderSelect={"Любая категория"}
        handleSelect={onChangeMenuCategories}
      />

      {renderSwitch(menuCategories)}

      <FilterSelector
        option={kitchen}
        placeHolderSelect={"Любая кухня"}
        handleSelect={onChangeKitchen}
      />

      <FilterSelector
        option={menu}
        placeHolderSelect={"Любое меню"}
        handleSelect={onChangeAll}
      />
    </>
  );
};
