import { IFurniture } from '../../models/IFurniture';
import { OperationStatus } from '../operationStatus';

export interface IFurnitureState {
  furniture: IFurniture[];
  furnitureLoadStatus: OperationStatus;
}

export const furnitureState: IFurnitureState = {
  furniture: [],
  furnitureLoadStatus: OperationStatus.NotStarted,
};
