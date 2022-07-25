import React from 'react';
import { DoughMap, SizesMap } from '../../const';
import { CartItem } from '../../redux/cart/types';
import { pizzaItem } from '../../redux/pizza/types';
import Options from '../Options';
import styles from './PizzaInfo.module.scss';
import cn from 'classnames';

const PizzaInfo: React.FC<pizzaItem & { onAddToCart: (obj: CartItem) => void }> = ({
  id,
  imageUrl,
  title,
  desc,
  price,
  onAddToCart,
}) => {
  const [size, setSize] = React.useState(SizesMap.MIDDLE);
  const [dough, setDough] = React.useState(DoughMap.TRADITIONAL);
  const [isAdded, setIsAdded] = React.useState(false);

  const totalPrice = Math.round(price * size.ratio * dough.ratio);
  const totalWeight = Math.round(400 * dough.ratio * size.ratio);
  const paramsText = `${size.diameter} см, ${dough.name.toLowerCase()} тесто, ${totalWeight} г`;

  const onAddClick = () => {
    setIsAdded(true);
    onAddToCart({
      id,
      imageUrl,
      title,
      price: totalPrice,
      size: size.diameter,
      dough: dough.name,
    });
  };

  const onOptionChange = (setState: any) => (state: any) => {
    setState(state);
    setIsAdded(false);
  };

  return (
    <div className={styles.root}>
      <img className={styles.image} src={imageUrl} width="430" />
      <div className={styles.leftColumn}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.params}>{paramsText}</p>
          <p className={styles.composition}>{desc}</p>
        </div>
        <div className={styles.settings}>
          <div className={styles.row}>
            <Options map={SizesMap} state={size} onClick={onOptionChange(setSize)} />
          </div>
          <div className={styles.row}>
            <Options map={DoughMap} state={dough} onClick={onOptionChange(setDough)} />
          </div>
        </div>
        <button
          className={cn('button', '--big', '--filled', { '--success': isAdded })}
          onClick={onAddClick}
          disabled={isAdded}>
          {isAdded ? 'Добавлено в корзину' : `Добавить в корзину за ${totalPrice} ₽`}
        </button>
      </div>
    </div>
  );
};

export default PizzaInfo;
