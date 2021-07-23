import * as React from 'react';
import './shoppingCart.css';
import ShoppingCartList from './shoppingCartList/shoppingCartListContainer';

export const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      <ShoppingCartList />
    </div>
  );
};
