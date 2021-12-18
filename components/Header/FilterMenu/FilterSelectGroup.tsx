import React, { useState } from "react";
import { FilterSelector } from "./FilterSelector";

import styled from "styled-components";

type MyOptionType = {
    label: string;
    value: string;
};

const categories = [
    { value: "all", label: "Любая категория" },
    { value: "semis", label: "Загатовки" },
    { value: "main", label: "Основные блюда" },
    { value: "pasta", label: "Паста и пицца" },
    { value: "all", label: "Любая категория" },
    { value: "semis", label: "Загатовки" },
    { value: "main", label: "Основные блюда" },
    { value: "pasta", label: "Паста и пицца" },
];

const semis = [
    { value: "semisAll", label: "Любое блюдо" },
    { value: "varenie", label: "Варенье" },
    { value: "sоlenie", label: "Соленье" },
];

const main = [
    { value: "mainAll", label: "Любое блюдо" },
    { value: "mutton", label: "Блюда из баранины" },
    { value: "pork", label: "Блюда из свинина" },
    { value: "cutlets", label: "Котлеты" },
    { value: "dumplings", label: "Пельмени" },
    { value: "shawarma", label: "Шаурма" },
];

const pasta = [
    { value: "pastaAll", label: "Любое блюдо" },
    { value: "pasta", label: "Макароны" },
    { value: "margarita", label: "Маргарита" },
    { value: "corbanara", label: "Паста карбонара" },
    { value: "Spaghetti", label: "Спагетти" },
];

const kitchen = [
    { value: "all", label: "Любая кухня" },
    { value: "italy", label: "Итальянская" },
    { value: "georgia", label: "Грузинская" },
    { value: "france", label: "Французкая" },
    { value: "russia", label: "Русская" },
];

const menu = [
    { value: "all", label: "Любая еда" },
    { value: "vegan", label: "Вегетарианская еда" },
    { value: "children", label: "Детское меню" },
    { value: "post", label: "Постная еда" },
];

const initFilter = { value: 'allDish', label: 'Любое блюдо' };

export const FilterSelectGroup: React.FC = () => {
    const [menuCategories, setMenuCategories] = useState('allCategories');
    const [menuDish, setMenuDish] = useState(initFilter);
    const [menuKitchen, setMenuKitchen] = useState('allKitchen');
    const [menuAll, setMenuAll] = useState('allMenu');

    const onChangeMenuCategories = (selectedOption: MyOptionType | any) => {
        setMenuCategories(selectedOption.value)
        setMenuDish(initFilter)
    };

    const onChangeDish = (selectedOption: MyOptionType | any) => {
        setMenuDish(selectedOption)
    };

    const onChangeKitchen = (selectedOption: MyOptionType | any) => {
        setMenuKitchen(selectedOption.value)
    };

    const onChangeAll = (selectedOption: MyOptionType | any) => {
        setMenuAll(selectedOption.value)
    };

    const renderSwitch = (param: string) => {
        switch (param) {
            case 'semis':
                return <FilterSelector option={semis} handleSelect={onChangeDish} valueSelect={null} placeHolderSelect={menuDish.label} />
            case 'main':
                return <FilterSelector option={main} handleSelect={onChangeDish} valueSelect={null} placeHolderSelect={menuDish.label} />
            case 'pasta':
                return <FilterSelector option={pasta} handleSelect={onChangeDish} valueSelect={null} placeHolderSelect={menuDish.label} />
            default:
                return <FilterSelector valueSelect={null} placeHolderSelect={'Любое блюдо'} disabled />
        }
    }

    return (
        <>
            <FilterSelector
                option={categories}
                placeHolderSelect={'Любая категория'}
                handleSelect={onChangeMenuCategories}
            />

            {
                renderSwitch(menuCategories)
            }

            <FilterSelector
                option={kitchen}
                placeHolderSelect={'Любая кухня'}
                handleSelect={onChangeKitchen}
            />

            <FilterSelector
                option={menu}
                placeHolderSelect={'Любая меню'}
                handleSelect={onChangeAll}
            />
        </>

    );
};
