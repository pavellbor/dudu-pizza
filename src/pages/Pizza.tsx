import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PizzaInfo from '../components/PizzaInfo';
import { addItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';
import { pizzaItem } from '../redux/pizza/types';

const Pizza: React.FC = () => {
  const [pizza, setPizza] = useState<pizzaItem>();
  const { id } = useParams();
  const dispatch = useDispatch();

  const onAddToCart = (obj: CartItem) => dispatch(addItem(obj));

  React.useEffect(() => {
    const fetchPizza = async () => {
      const { data } = await axios.get(`https://62d86a78908831393590aa97.mockapi.io/items/${id}`);
      setPizza(data);
    };

    fetchPizza();
  }, []);

  return pizza ? <PizzaInfo {...pizza} onAddToCart={onAddToCart} /> : <p>Загрузка...</p>;
};

export default Pizza;
