import { Reducer } from 'redux';
import { FurnitureActions } from './furnitureActions';
import * as furnitureActionTypes from './furnitureActionTypes';
import { furnitureState, IFurnitureState } from './furnitureState';

const furnitureReducer: Reducer<IFurnitureState, FurnitureActions> = (
  state: IFurnitureState = furnitureState,
  action: FurnitureActions
): IFurnitureState => {
  switch (action.type) {
    case furnitureActionTypes.SET_FURNITURE: {
      return { ...state, furniture: action.furniture };
    }
    case furnitureActionTypes.SET_FURNITURE_LOAD_STATUS: {
      return { ...state, furnitureLoadStatus: action.status };
    }
    case furnitureActionTypes.SET_CURRENT_FURNITURE: {
      return { ...state, currentFurniture: action.furniture };
    }
    default:
      return state;
  }
};

export default furnitureReducer;
