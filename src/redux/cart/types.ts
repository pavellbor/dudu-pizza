export interface CartItem {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  size: number;
  dough: string;
}

export interface CartItemProcessed {
  id: string;
  uId: string;
  title: string;
  imageUrl: string;
  price: number;
  size: number;
  dough: string;
  count: number;
}

export interface CartState {
  items: CartItemProcessed[];
}
