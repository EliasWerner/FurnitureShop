import * as React from 'react';
import './characteristics.css';
import { IFurniture } from '../../../models/IFurniture';

export interface ICharacteristicsProps {
  furniture: IFurniture;
}

export const Characteristics = (props: ICharacteristicsProps) => {
  return <div className="characteristics-table">Characteristics</div>;
};
