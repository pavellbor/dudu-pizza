import React from 'react';
import { useDispatch } from 'react-redux';
import { CountActionMap, SizesMap } from '../../const';
import { changeСount, removeItem } from '../../redux/cart/slice';
import styles from './CartItem.module.scss';

const CartItem: React.FC<any> = ({ uId, imageUrl, title, dough, size, price, count }) => {
  const dispatch = useDispatch();

  const onCountBtnClick = (action: string) => () => dispatch(changeСount({ uId, action }));

  const onRemoveBtnClick = (uId: string) => {
    dispatch(removeItem(uId));
  };

  return (
    <div className={styles.root}>
      <img className={styles.image} src={imageUrl} width="255" height="255" alt="Пицца" />
      <div className={styles.column}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{`${
          Object.values(SizesMap).find((obj) => obj.diameter === size)?.name
        } ${size} см, ${dough.toLowerCase()} тесто`}</p>
      </div>
      <div className={styles.count}>
        <button
          className={styles.countBtn}
          onClick={onCountBtnClick(CountActionMap.DECREASE)}
          disabled={count === 1}>
          <img src="/img/Minus.svg" width="36" height="36" />
        </button>
        {count}
        <button className={styles.countBtn} onClick={onCountBtnClick(CountActionMap.INCREASE)}>
          <img src="/img/Plus.svg" width="36" height="36" />
        </button>
      </div>
      <span className={styles.price}>{price * count} ₽</span>
      <button className={styles.removeBtn} onClick={() => onRemoveBtnClick(uId)}>
        <img src="/img/Remove.svg" width="36" height="36" />
      </button>
    </div>
  );
};

export default CartItem;
