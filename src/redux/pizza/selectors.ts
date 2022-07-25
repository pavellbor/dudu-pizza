import { RootState } from '../store';

export const selectPizzaItems = (state: RootState) => state.pizza.items;

export const selectPizzaLoading = (state: RootState) => state.pizza.isLoading;
