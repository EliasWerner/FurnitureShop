import * as React from 'react';
import './shoppingCartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export interface IShoppingCartProps {
  itemsAmount: number;
}

export const ShoppingCartIcon = (props: IShoppingCartProps) => {
  return (
    <NavLink className="shopping-card-icon" to="/shopping-cart">
      <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
      Корзина <span>{props.itemsAmount > 0 ? props.itemsAmount : null}</span>
    </NavLink>
  );
};
