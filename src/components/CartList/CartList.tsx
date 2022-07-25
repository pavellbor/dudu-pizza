import React from 'react';
// import { CartItem } from '../../redux/cart/types';
import CartItem from '../CartItem';
import styles from './CartList.module.scss';

interface CartListProps {
  items: any;
}

const CardList: React.FC<CartListProps> = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((obj: any) => (
        <CartItem key={obj.uId} {...obj} />
      ))}
    </div>
  );
};

export default CardList;
