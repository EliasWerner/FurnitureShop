import * as React from 'react';
import './furnitureList.css';
import { IFurnitureType } from '../../models/IFurnitureType';
import { IFurniture } from '../../models/IFurniture';
import { OperationStatus } from '../../store/operationStatus';
import { FurnitureListItem } from './furnitureListItem/furnitureListItem';

export interface IFurnitureListParams {
  parentTypeId: number;
  furnitureParentType: IFurnitureType | null;
  furnitureSubtypes: IFurnitureType[];
  furniture: IFurniture[];
  loadStatus: OperationStatus;
}

export interface IFurnitureListFuncs {
  getFurnitureType: (typeId: number) => void;
  getFurnitureSubtypes: (type: IFurnitureType) => void;
  getFurnitureForTypes: (types: IFurnitureType[]) => void;
}

export interface IFurnitureListProps
  extends IFurnitureListFuncs,
    IFurnitureListParams {}

export const FurnitureList = (props: IFurnitureListProps) => {
  React.useEffect(() => {
    props.getFurnitureType(props.parentTypeId);
  }, []);

  React.useEffect(() => {
    if (props.furnitureParentType) {
      props.getFurnitureSubtypes(props.furnitureParentType);
    }
  }, [props.furnitureParentType && props.furnitureParentType?.Id]);

  React.useEffect(() => {
    props.getFurnitureForTypes([
      ...props.furnitureSubtypes,
      props.furnitureParentType as IFurnitureType,
    ]);
  }, [props.furnitureSubtypes]);

  return (
    <div className="furniture-list">
      {props.furnitureParentType ? (
        <h3>{props.furnitureParentType.Title}</h3>
      ) : null}
      {props.furniture.length
        ? props.furniture.map((f) => <FurnitureListItem furniture={f} />)
        : null}
    </div>
  );
};
