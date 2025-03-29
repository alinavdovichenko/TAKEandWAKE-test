export enum Category {
  Coffee = "Кофе",
  Tea = "Чай",
  Bakery = "Выпечка",
  Desserts = "Десерты"
}

export enum Status {
  Available = "Доступен",
  OutOfStock = "Нет в наличии"
}

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  status: Status;
  date_created: string; // Дата в формате YYYY-MM-DD
  ingredients: string[];
  availability: boolean;
};
