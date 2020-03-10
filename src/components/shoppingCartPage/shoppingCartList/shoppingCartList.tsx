import * as React from 'react';
import './shoppingCartList.css';
import { IShoppingCartItem } from '../../../models/IShoppingCartItem';
import ShoppingCartListItem from './shoppingCartListItem/shoppingCartListItemContainer';

export interface IShoppingCartListProps {
  items: IShoppingCartItem[];
}

export const ShoppingCartList = (props: IShoppingCartListProps) => {
  const getTotalPrice = () => {
    let result: number = 0;

    for (const item of props.items) {
      result += item.amount * item.furniture.Price;
    }

    return result;
  };
  return (
    <div>
      {props.items.length ? (
        <>
          <div className="shopping-cart-list">
            {props.items.map((item) => (
              <ShoppingCartListItem listItem={item} />
            ))}
          </div>
          <div className="total-price">
            <h4>К оплате: {getTotalPrice()} руб.</h4>
          </div>
        </>
      ) : null}
    </div>
  );
};
