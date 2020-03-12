import * as shoppingCartActionTypes from './shoppingCartActionTypes';

import { IFurniture } from '../../models/IFurniture';

// SET_LOADING

export interface AddToCart {
  type: shoppingCartActionTypes.ADD_FURNITURE_TO_CART;
  furniture: IFurniture;
}

export const addToCart = (furniture: IFurniture): ShoppingCartActions => ({
  furniture,
  type: shoppingCartActionTypes.ADD_FURNITURE_TO_CART,
});

export interface IncreaseAmount {
  type: shoppingCartActionTypes.INCREASE_FURNITURE_AMOUNT;
  furniture: IFurniture;
}

export const increaseAmount = (furniture: IFurniture): ShoppingCartActions => ({
  furniture,
  type: shoppingCartActionTypes.INCREASE_FURNITURE_AMOUNT,
});

export interface SetAmount {
  type: shoppingCartActionTypes.SET_FURNITURE_AMOUNT;
  furniture: IFurniture;
  newAmount: number;
}

export const setAmount = (
  furniture: IFurniture,
  newAmount: number
): ShoppingCartActions => ({
  furniture,
  newAmount,
  type: shoppingCartActionTypes.SET_FURNITURE_AMOUNT,
});

export interface DecreaseAmount {
  type: shoppingCartActionTypes.DECREASE_FURNITURE_AMOUNT;
  furniture: IFurniture;
}

export const decreaseAmount = (furniture: IFurniture): ShoppingCartActions => ({
  furniture,
  type: shoppingCartActionTypes.DECREASE_FURNITURE_AMOUNT,
});

export interface DeleteFromCart {
  type: shoppingCartActionTypes.DELETE_FURNITURE_FROM_CART;
  furniture: IFurniture;
}

export const deleteFromCart = (furniture: IFurniture): ShoppingCartActions => ({
  furniture,
  type: shoppingCartActionTypes.DELETE_FURNITURE_FROM_CART,
});

export type ShoppingCartActions =
  | AddToCart
  | DeleteFromCart
  | IncreaseAmount
  | DecreaseAmount
  | SetAmount;
