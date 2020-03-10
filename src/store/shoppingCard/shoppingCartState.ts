import { IShoppingCartItem } from '../../models/IShoppingCartItem';

export interface IShoppingCartState {
  shoppingCartItems: IShoppingCartItem[];
}

export const furnitureState: IShoppingCartState = {
  shoppingCartItems: [],
};
