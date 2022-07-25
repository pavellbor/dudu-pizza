import React from 'react';
import { pizzaItem } from '../../redux/pizza/types';
import CardItem from '../CardItem';
import CardSkeleton from '../CardSkeleton';
import styles from './CardList.module.scss';

interface CardListProps {
  items: pizzaItem[];
  isLoading: boolean;
}

const CardList: React.FC<CardListProps> = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.root}>
        {[...Array(6)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {items.map((obj) => (
        <CardItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};

export default CardList;
