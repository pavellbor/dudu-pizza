export interface pizzaItem {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  price: number;
  category: string[];
}

export interface PizzaState {
  items: pizzaItem[];
  isLoading: boolean;
}
