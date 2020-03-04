import { Reducer } from 'redux';
import { FurnitureActions } from './furnitureActions';
import * as furnitureActionTypes from './furnitureActionTypes';
import { furnitureState, IFurnitureState } from './furnitureState';

const furnitureReducer: Reducer<IFurnitureState> = (
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
    default:
      return state;
  }
};

export default furnitureReducer;
