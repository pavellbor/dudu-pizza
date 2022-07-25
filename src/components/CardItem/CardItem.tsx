import React from 'react';
import { Link } from 'react-router-dom';
import { pizzaItem } from '../../redux/pizza/types';
import styles from './CardItem.module.scss';

const CardItem: React.FC<pizzaItem> = ({ id, imageUrl, title, desc, price }) => {
  return (
    <Link className={styles.root} to={`/pizza/${id}`}>
      <img className={styles.image} src={imageUrl} width="255" height="255" alt="Пицца" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.footer}>
        <span>от {price} ₽</span>
        <button className="button --light">Выбрать</button>
      </div>
    </Link>
  );
};

export default CardItem;
