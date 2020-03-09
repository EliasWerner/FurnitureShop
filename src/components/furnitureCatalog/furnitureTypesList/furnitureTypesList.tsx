import * as React from 'react';
import './furnitureTypesList.css';
import { IFurnitureType } from '../../../models/IFurnitureType';
import { OperationStatus } from '../../../store/operationStatus';
import { FurnitureTypeItem } from './furnitureTypeItem/furnitureTypeItem';

export interface IFurnitureTypesParams {
  furnitureTypes: IFurnitureType[];
  loadingStatus: OperationStatus;
}

export interface IFurnitureTypesFuncs {
  getFurnitureTypes: () => void;
}

export interface IFurnitureTypesProps
  extends IFurnitureTypesFuncs,
    IFurnitureTypesParams {}

export const FurnitureTypesList = (props: IFurnitureTypesProps) => {
  React.useEffect(() => {
    props.getFurnitureTypes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="furniture-types-list">
      {props.furnitureTypes.length
        ? props.furnitureTypes.map((ft) => (
            <FurnitureTypeItem furnitureType={ft} key={ft.Id} />
          ))
        : null}
    </div>
  );
};
