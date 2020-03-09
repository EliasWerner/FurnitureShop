import * as React from 'react';
import { IFurnitureType } from '../../../../models/IFurnitureType';
import './furnitureTypeItem.css';
import { NavLink } from 'react-router-dom';

export interface IFurnitureTypeItemProps {
  furnitureType: IFurnitureType;
}

export const FurnitureTypeItem = (props: IFurnitureTypeItemProps) => {
  return (
    <NavLink
      to={props.furnitureType.RouteLink ? props.furnitureType.RouteLink : '/'}
    >
      <div className="furniture-types-list-item">
        <div className="image-container">
          <img
            src={props.furnitureType.ImageUrl}
            alt={props.furnitureType.Title}
          ></img>
        </div>
        <h4>{props.furnitureType.Title}</h4>
      </div>
    </NavLink>
  );
};
