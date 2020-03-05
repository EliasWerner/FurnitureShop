import { OperationStatus } from '../operationStatus';
import { IFurnitureType } from '../../models/IFurnitureType';

export interface IFurnitureTypesState {
  furnitureTypes: IFurnitureType[];
  selectedFurnitureType: IFurnitureType | null;
  furnitureTypesLoadStatus: OperationStatus;
}

export const furnitureTypesState: IFurnitureTypesState = {
  furnitureTypes: [],
  selectedFurnitureType: null,
  furnitureTypesLoadStatus: OperationStatus.NotStarted,
};
