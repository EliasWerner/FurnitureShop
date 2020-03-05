import { IFurniture } from '../../models/IFurniture';
import { OperationStatus } from '../operationStatus';

export interface IFurnitureState {
  furniture: IFurniture[];
  currentFurniture: IFurniture | null;
  furnitureLoadStatus: OperationStatus;
}

export const furnitureState: IFurnitureState = {
  furniture: [],
  currentFurniture: null,
  furnitureLoadStatus: OperationStatus.NotStarted,
};
