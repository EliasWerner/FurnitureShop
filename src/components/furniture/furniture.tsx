import * as React from 'react';
import FurnitureTypesList from './furnitureTypes/furnitureTypesListContainer';
import './furniture.css';

export const Furniture = () => {
  return (
    <div className="furniture">
      <h3>Товары и услуги</h3>
      <FurnitureTypesList />
    </div>
  );
};
