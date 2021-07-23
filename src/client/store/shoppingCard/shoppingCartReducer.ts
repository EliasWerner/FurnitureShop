import { Reducer } from 'redux';
import { ShoppingCartActions } from './shoppingCartActions';
import * as shoppingCartActionTypes from './shoppingCartActionTypes';
import { furnitureState, IShoppingCartState } from './shoppingCartState';

const shoppingCartReducer: Reducer<IShoppingCartState, ShoppingCartActions> = (
  state: IShoppingCartState = furnitureState,
  action: ShoppingCartActions
): IShoppingCartState => {
  switch (action.type) {
    case shoppingCartActionTypes.ADD_FURNITURE_TO_CART: {
      const isAlreadyContainsItem = state.shoppingCartItems.filter(
        (item) => item.furniture.Id === action.furniture.Id
      );

      if (!isAlreadyContainsItem.length) {
        return {
          ...state,
          shoppingCartItems: [
            ...state.shoppingCartItems,
            { furniture: action.furniture, amount: 1 },
          ],
        };
      } else {
        return state;
      }
    }
    case shoppingCartActionTypes.DELETE_FURNITURE_FROM_CART: {
      const filteredShoppingCart = state.shoppingCartItems.filter(
        (item) => item.furniture.Id !== action.furniture.Id
      );
      return { ...state, shoppingCartItems: filteredShoppingCart };
    }
    case shoppingCartActionTypes.INCREASE_FURNITURE_AMOUNT: {
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.map((item) => {
          if (item.furniture.Id !== action.furniture.Id) {
            return item;
          }

          return {
            ...item,
            amount: item.amount + 1,
          };
        }),
      };
    }
    case shoppingCartActionTypes.DECREASE_FURNITURE_AMOUNT: {
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.map((item) => {
          if (item.furniture.Id !== action.furniture.Id) {
            return item;
          }

          return {
            ...item,
            amount: item.amount > 1 ? item.amount - 1 : item.amount,
          };
        }),
      };
    }
    case shoppingCartActionTypes.SET_FURNITURE_AMOUNT: {
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.map((item) => {
          if (item.furniture.Id !== action.furniture.Id) {
            return item;
          }

          return {
            ...item,
            amount: action.newAmount,
          };
        }),
      };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
