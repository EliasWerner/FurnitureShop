import * as React from 'react';
import './furnitureListItem.css';
import { IFurniture } from '../../../models/IFurniture';
import { NavLink } from 'react-router-dom';

export interface IFurnitureListItemParams {
  furniture: IFurniture;
}

export interface IFurnitureListItemFuncs {}

export interface IFurnitureListItemProps
  extends IFurnitureListItemFuncs,
    IFurnitureListItemParams {}

export const FurnitureListItem = (props: IFurnitureListItemProps) => {
  return (
    <NavLink className="furniture-list-item" to={`/${props.furniture.Id}`}>
      <div className="image-container">
        <img src={props.furniture.ImageUrl} alt={props.furniture.Title}></img>
      </div>
      <p>{props.furniture.Price} руб.</p>
      <h4>{props.furniture.Title}</h4>
    </NavLink>
  );
};
