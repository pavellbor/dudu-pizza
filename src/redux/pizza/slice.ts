import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PizzaState } from './types';

const initialState: PizzaState = {
  items: [],
  isLoading: true,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaState>) => {
      state.items = action.payload.items;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
