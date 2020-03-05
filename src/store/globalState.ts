import { IFurnitureState } from './furniture/furnitureState';
import { IFurnitureTypesState } from './furnitureTypes/furnitureTypesState';

export interface IGlobalState {
  furniture: IFurnitureState;
  furnitureTypes: IFurnitureTypesState;
}
