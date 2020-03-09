import * as React from 'react';
import './furniture.css';
import { IFurniture } from '../../models/IFurniture';
import { OperationStatus } from '../../store/operationStatus';
import { ImagesGallery } from './imagesGallery/imagesGallery';

export interface IFurnitureParams {
  furniture: IFurniture | null;
  furnitureLoadStatus: OperationStatus;
}

export interface IFurnitureFuncs {
  getFurnitureById: (furnitureId: number) => void;
}

export interface IFurnitureProps extends IFurnitureParams, IFurnitureFuncs {
  match: any;
}

export const Furniture = (props: IFurnitureProps) => {
  React.useEffect(() => {
    if (props.match?.params?.furnitureId) {
      props.getFurnitureById(Number(props.match.params.furnitureId));
    }
  }, []);

  if (!props.furniture) {
    return null;
  }

  return (
    <div className="furniture">
      <h3>{props.furniture.Title}</h3>
      <div className="furniture-row">
        <div className="furniture-col">
          <ImagesGallery
            images={[props.furniture.ImageUrl]}
            title={props.furniture.Title}
          />
        </div>
        <div className="furniture-col">
          <div>{props.furniture.Price} руб.</div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: props.furniture.Description }}
      ></div>
    </div>
  );
};