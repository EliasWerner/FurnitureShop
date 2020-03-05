import * as furnitureTypesActionTypes from './furnitureTypesActionTypes';
import { OperationStatus } from '../operationStatus';
import { IGlobalState } from '../globalState';
import { IFurnitureType } from '../../models/IFurnitureType';
import { FurnitureTypesService } from '../../services/furnitureTypesService';

// SET_LOADING

export interface SetLoading {
  type: furnitureTypesActionTypes.SET_FURNITURE_TYPES_LOAD_STATUS;
  status: OperationStatus;
}

export const setLoading = (status: OperationStatus): FurnitureTypesActions => ({
  status,
  type: furnitureTypesActionTypes.SET_FURNITURE_TYPES_LOAD_STATUS,
});

export interface SetFurnitureTypes {
  type: furnitureTypesActionTypes.SET_FURNITURE_TYPES;
  furnitureTypes: IFurnitureType[];
}

export const setFurnitureTypes = (
  furnitureTypes: IFurnitureType[]
): FurnitureTypesActions => ({
  furnitureTypes,
  type: furnitureTypesActionTypes.SET_FURNITURE_TYPES,
});

export const getFurnitureTypes = () => {
  return async (dispatch: any, getState: () => IGlobalState) => {
    try {
      dispatch(setLoading(OperationStatus.InProgress));

      const service = new FurnitureTypesService();
      const furnitureTypes: IFurnitureType[] = service.getFurnitureTypes();

      dispatch(setFurnitureTypes(furnitureTypes));
      dispatch(setLoading(OperationStatus.Completed));
    } catch (error) {
      dispatch(setLoading(OperationStatus.Failed));
    } finally {
      dispatch(setLoading(OperationStatus.NotStarted));
    }
  };
};

export const getMainFurnitureTypes = () => {
  return async (dispatch: any, getState: () => IGlobalState) => {
    try {
      dispatch(setLoading(OperationStatus.InProgress));

      const service = new FurnitureTypesService();
      const furnitureTypes: IFurnitureType[] = service.getMainFurnitureTypes();

      dispatch(setFurnitureTypes(furnitureTypes));
      dispatch(setLoading(OperationStatus.Completed));
    } catch (error) {
      dispatch(setLoading(OperationStatus.Failed));
    } finally {
      dispatch(setLoading(OperationStatus.NotStarted));
    }
  };
};

export type FurnitureTypesActions = SetLoading | SetFurnitureTypes;
