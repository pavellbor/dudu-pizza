import { RootState } from '../store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce((acc, { count }) => acc + count, 0);

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce((acc, { count, price }) => acc + count * price, 0);
