import { OperationStatus } from '../operationStatus';
import { IFurnitureType } from '../../models/IFurnitureType';

export interface IFurnitureTypesState {
  furnitureTypes: IFurnitureType[];
  currentFType: IFurnitureType | null;
  furnitureSubtypes: IFurnitureType[];
  furnitureTypesLoadStatus: OperationStatus;
}

export const furnitureTypesState: IFurnitureTypesState = {
  furnitureTypes: [],
  furnitureSubtypes: [],
  currentFType: null,
  furnitureTypesLoadStatus: OperationStatus.NotStarted,
};
