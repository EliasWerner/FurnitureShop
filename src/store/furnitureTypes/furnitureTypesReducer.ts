import { Reducer } from 'redux';
import { FurnitureTypesActions } from './furnitureTypesActions';
import * as furnitureTypesActionTypes from './furnitureTypesActionTypes';
import {
  furnitureTypesState,
  IFurnitureTypesState,
} from './furnitureTypesState';

const furnitureTypesReducer: Reducer<
  IFurnitureTypesState,
  FurnitureTypesActions
> = (
  state: IFurnitureTypesState = furnitureTypesState,
  action: FurnitureTypesActions
): IFurnitureTypesState => {
  switch (action.type) {
    case furnitureTypesActionTypes.SET_FURNITURE_TYPES: {
      return { ...state, furnitureTypes: action.furnitureTypes };
    }
    case furnitureTypesActionTypes.SET_CURRENT_FURNITURE_TYPE: {
      return { ...state, selectedFurnitureType: action.furnitureType };
    }
    case furnitureTypesActionTypes.SET_FURNITURE_TYPES_LOAD_STATUS: {
      return { ...state, furnitureTypesLoadStatus: action.status };
    }
    default:
      return state;
  }
};

export default furnitureTypesReducer;
