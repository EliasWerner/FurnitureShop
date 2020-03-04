import * as furnitureActionTypes from './furnitureActionTypes';
import { OperationStatus } from '../operationStatus';
import { IGlobalState } from '../globalState';
import { IFurniture } from '../../models/IFurniture';

// SET_LOADING

export interface SetLoading {
  type: furnitureActionTypes.SET_FURNITURE_LOAD_STATUS;
  status: OperationStatus;
}

export const setLoading = (status: OperationStatus): FurnitureActions => ({
  status,
  type: furnitureActionTypes.SET_FURNITURE_LOAD_STATUS,
});

export interface SetFurniture {
  type: furnitureActionTypes.SET_FURNITURE;
  furniture: IFurniture[];
}

export const setFurniture = (furniture: IFurniture[]): FurnitureActions => ({
  furniture,
  type: furnitureActionTypes.SET_FURNITURE,
});

export const getFurnitures = () => {
  return async (dispatch: any, getState: () => IGlobalState) => {
    try {
      dispatch(setLoading(OperationStatus.InProgress));

      const furniture: IFurniture[] = [];

      dispatch(setFurniture(furniture));
      dispatch(setLoading(OperationStatus.Completed));
    } catch (error) {
      dispatch(setLoading(OperationStatus.Failed));
    } finally {
      dispatch(setLoading(OperationStatus.NotStarted));
    }
  };
};

export type FurnitureActions = SetLoading | SetFurniture;
