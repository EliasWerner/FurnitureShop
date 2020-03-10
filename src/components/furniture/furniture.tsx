import * as React from 'react';
import './furniture.css';
import { IFurniture } from '../../models/IFurniture';
import { OperationStatus } from '../../store/operationStatus';
import { ImagesGallery } from './imagesGallery/imagesGallery';
import { PricePanel } from './pricePanel/pricePanel';
import { GeneralInfoPanel } from './generallnfoPanel/generalInfoPanel';
import { Characteristics } from './characteristics/characteristics';

export interface IFurnitureParams {
  furniture: IFurniture | null;
  furnitureLoadStatus: OperationStatus;
}

export interface IFurnitureFuncs {
  getFurnitureById: (furnitureId: number) => void;
  addToShoppingCart: (furniture: IFurniture) => void;
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

  const addToShoppingCart = () => {
    props.addToShoppingCart(props.furniture as IFurniture);
  };

  return (
    <div className="furniture">
      <div className="furniture-row">
        <div className="furniture-col">
          <ImagesGallery
            images={[props.furniture.ImageUrl]}
            title={props.furniture.Title}
          />
        </div>
        <div className="furniture-col">
          <h3>{props.furniture.Title}</h3>
          <PricePanel
            price={props.furniture.Price}
            addToCard={addToShoppingCart}
          />
          <GeneralInfoPanel />
        </div>
      </div>
      <div
        className="furniture-description"
        dangerouslySetInnerHTML={{ __html: props.furniture.Description }}
      />
      <Characteristics furniture={props.furniture} />
    </div>
  );
};
