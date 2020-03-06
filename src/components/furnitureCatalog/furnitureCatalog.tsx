import * as React from 'react';
import FurnitureTypesList from './furnitureTypesList/furnitureTypesListContainer';
import './furnitureCatalog.css';

export const FurnitureCatalog = () => {
  return (
    <div className="furniture">
      <h3>Товары и услуги</h3>
      <FurnitureTypesList />
    </div>
  );
};
