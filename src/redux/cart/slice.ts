import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createUId } from '../../utils';
import { CartItem, CartState } from './types';

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.items.find(
        (item) => item.id === action.payload.id && item.price === action.payload.price,
      );

      if (!foundItem) {
        state.items.push({
          ...action.payload,
          uId: createUId(),
          count: 1,
        });
      } else {
        foundItem.count++;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.uId !== action.payload);
    },
    changeСount: (state, action: PayloadAction<{ uId: string; action: string }>) => {
      const foundItem = state.items.find((item) => item.uId === action.payload.uId);

      if (!foundItem) {
        return;
      }

      switch (action.payload.action) {
        case 'Увеличить':
          foundItem.count++;
          break;
        case 'Уменьшить':
          foundItem.count--;
          break;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, changeСount, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
