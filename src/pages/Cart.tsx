import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/CartList';
import Section from '../components/Section';
import { selectCartItems, selectCartTotalPrice } from '../redux/cart/selectors';
import { clearCart } from '../redux/cart/slice';

const Cart: React.FC = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  const onClearBtnClick = () => dispatch(clearCart());
  const onOrderBtnClick = () => alert('Данный функционал в разработке');

  return items.length ? (
    <Section
      title="Корзина"
      rightColumnElement={
        <button className="button --outline --active" onClick={onClearBtnClick}>
          Очистить
        </button>
      }
      footerElement={
        <button className="button --big --filled" onClick={onOrderBtnClick}>
          Оформить заказ за&nbsp;<b>{totalPrice} ₽</b>
        </button>
      }>
      <CartList items={items} />
    </Section>
  ) : (
    <Section title="Корзина">
      <p className="placeholder">Корзина пустая</p>
    </Section>
  );
};

export default Cart;
