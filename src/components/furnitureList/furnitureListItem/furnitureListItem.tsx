import * as React from 'react';
import './furnitureListItem.css';
import { IFurniture } from '../../../models/IFurniture';

export interface IFurnitureListItemParams {
  furniture: IFurniture;
}

export interface IFurnitureListItemFuncs {}

export interface IFurnitureListItemProps
  extends IFurnitureListItemFuncs,
    IFurnitureListItemParams {}

export const FurnitureListItem = (props: IFurnitureListItemProps) => {
  return (
    <div className="furniture-list-item">
      <div className="image-container">
        <img src={props.furniture.ImageUrl} alt={props.furniture.Title}></img>
      </div>
      <p>{props.furniture.Price} руб.</p>
      <h4>{props.furniture.Title}</h4>
    </div>
  );
};
