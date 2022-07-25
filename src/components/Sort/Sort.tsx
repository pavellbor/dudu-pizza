/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import cn from 'classnames';
import styles from './Sort.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortValue } from '../../redux/sort/selectors';
import { SortMap } from '../../redux/sort/types';
import { setSortValue } from '../../redux/sort/slice';

const Sort: React.FC = () => {
  const sortValue = useSelector(selectSortValue);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);

  const onToggleClick = () => {
    setIsVisible(!isVisible);
  };

  const onItemClick = (value: SortMap) => {
    dispatch(setSortValue(value));
    setIsVisible(false);
  };

  return (
    <div className={styles.root}>
      <button className={styles.toggle} onClick={onToggleClick}>
        <span>{sortValue}</span>
        <img src="img/Arrow.svg" />
      </button>
      <ul className={cn(styles.list, { [styles.visible]: isVisible })}>
        {Object.entries(SortMap).map(([key, value]) => (
          <li
            className={cn({ [styles.active]: sortValue === value })}
            onClick={() => onItemClick(value)}
            key={key}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
