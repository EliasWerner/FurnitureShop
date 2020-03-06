import * as React from 'react';
import { IFurnitureType } from '../../../../models/IFurnitureType';
import './furnitureTypeItem.css';

export interface IFurnitureTypeItemProps {
  furnitureType: IFurnitureType;
}

export const FurnitureTypeItem = (props: IFurnitureTypeItemProps) => {
  return (
    <div className="furniture-type" key={props.furnitureType.Id}>
      <div className="image-container">
        <img
          src={props.furnitureType.ImageUrl}
          alt={props.furnitureType.Title}
        ></img>
      </div>
      <h4>{props.furnitureType.Title}</h4>
    </div>
  );
};
