export type MyOptionType = {
  label: string;
  value: string;
  isDisabled? : boolean;
};

export const categories: MyOptionType[] = [
  { value: "all", label: "Любая категория" },
  { value: "semis", label: "Загатовки" },
  { value: "main", label: "Основные блюда" },
  { value: "pasta", label: "Паста и пицца" },
  { value: "all", label: "Любая категория" },
  { value: "semis", label: "Загатовки" },
  { value: "main", label: "Основные блюда" },
  { value: "pasta", label: "Паста и пицца" },
];

export const semis: MyOptionType[]  = [
  { value: "semisAll", label: "Любое блюдо" },
  { value: "varenie", label: "Варенье" },
  { value: "sоlenie", label: "Соленье" },
];

export const main: MyOptionType[]  = [
  { value: "mainAll", label: "Любое блюдо" },
  { value: "mutton", label: "Блюда из баранины" },
  { value: "pork", label: "Блюда из свинина" },
  { value: "cutlets", label: "Котлеты" },
  { value: "dumplings", label: "Пельмени" },
  { value: "shawarma", label: "Шаурма" },
];

export const pasta: MyOptionType[]  = [
  { value: "pastaAll", label: "Любое блюдо" },
  { value: "pasta", label: "Макароны" },
  { value: "margarita", label: "Маргарита" },
  { value: "corbanara", label: "Паста карбонара" },
  { value: "Spaghetti", label: "Спагетти" },
];

export const kitchen: MyOptionType[]  = [
  { value: "all", label: "Любая кухня" },
  { value: "italy", label: "Итальянская" },
  { value: "georgia", label: "Грузинская" },
  { value: "france", label: "Французкая" },
  { value: "russia", label: "Русская" },
];

export const menu: MyOptionType[]  = [
  { value: "all", label: "Любая еда" },
  { value: "vegan", label: "Вегетарианская еда" },
  { value: "children", label: "Детское меню" },
  { value: "post", label: "Постная еда" },
];

export const initFilter: MyOptionType  = { value: 'allDish', label: 'Любое блюдо' };