import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizza/slice';
import searchReducer from './search/slice';
import sortReducer from './sort/slice';
import cartReducer from './cart/slice';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    sort: sortReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
