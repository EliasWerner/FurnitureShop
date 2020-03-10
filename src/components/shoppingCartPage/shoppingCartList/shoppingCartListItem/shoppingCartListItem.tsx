import * as React from 'react';
import './shoppingCartListItem.css';
import { IShoppingCartItem } from '../../../../models/IShoppingCartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IShoppingCartListItemParams {
  listItem: IShoppingCartItem;
}

export interface IShoppingCartListItemFunc {
  deleteFromCart: (listItem: IShoppingCartItem) => void;
  increaseAmount: (listItem: IShoppingCartItem) => void;
  decreaseAmount: (listItem: IShoppingCartItem) => void;
}

export interface IShoppingCartListItemProps
  extends IShoppingCartListItemFunc,
    IShoppingCartListItemParams {}

export const ShoppingCartListItem = (props: IShoppingCartListItemProps) => {
  return (
    <div className="shopping-cart-list-item">
      <div className="shopping-cart-list-item-image">
        <img
          src={props.listItem.furniture.ImageUrl}
          alt={props.listItem.furniture.Title}
        />
      </div>
      <div className="shopping-cart-list-item-title">
        <h4>{props.listItem.furniture.Title}</h4>
        <h5>{props.listItem.furniture.Price} руб.</h5>
      </div>
      <div className="shopping-cart-list-item-amount">
        <button onClick={() => props.decreaseAmount(props.listItem)}>-</button>
        <input type="number" value={props.listItem.amount} />
        <button onClick={() => props.increaseAmount(props.listItem)}>+</button>
      </div>
      <div
        className="shopping-cart-list-item-delete"
        onClick={() => props.deleteFromCart(props.listItem)}
      >
        <FontAwesomeIcon icon={['fas', 'trash']} />
      </div>
    </div>
  );
};
