import { IFurnitureState } from './furniture/furnitureState';
import { IFurnitureTypesState } from './furnitureTypes/furnitureTypesState';
import { IShoppingCartState } from './shoppingCard/shoppingCartState';

export interface IGlobalState {
  furniture: IFurnitureState;
  furnitureTypes: IFurnitureTypesState;
  shoppingCart: IShoppingCartState;
}
