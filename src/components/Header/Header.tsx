/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { CategoryMap } from '../../const';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/selectors';

const Header: React.FC = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <header className={styles.root}>
      <NavLink className={styles.logo} to="/">
        <img src="/img/Logo.svg" width="273" height="43" alt="Logo" />
      </NavLink>
      <nav className={styles.nav}>
        {Object.entries(CategoryMap)
          .slice(1)
          .map(([key, value]) => (
            <NavLink to={`/${key}`} key={key}>
              {value}
            </NavLink>
          ))}
        <NavLink className="button --filled" to="/cart">
          Корзина
          {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
