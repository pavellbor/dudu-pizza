import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../redux/pizza/slice';
import { SortMap } from '../redux/sort/types';

export type Category = '' | 'new' | 'hit' | 'vegan' | 'hot';

interface useFetchPizzaProps {
  category: Category;
  sortValue: SortMap;
  searchValue: string;
}

export const useFetchPizza = async ({ category, sortValue, searchValue }: useFetchPizzaProps) => {
  const dispatch = useDispatch();

  const fetchPizza = async () => {
    const categoryParam = searchValue === '' ? `category=${category}` : '';
    const searchParam = `search=${searchValue}`;
    const sortParam = `sortBy=price&order=${sortValue === SortMap.EXPENSIVE ? 'desc' : 'asc'}`;

    const { data } = await axios.get(
      `https://62d86a78908831393590aa97.mockapi.io/items?${categoryParam}&${sortParam}&${searchParam}`,
    );
    dispatch(setItems({ items: data, isLoading: false }));
  };

  React.useEffect(() => {
    dispatch(setItems({ items: [], isLoading: true }));
    fetchPizza();
  }, [category, sortValue, searchValue]);
};
