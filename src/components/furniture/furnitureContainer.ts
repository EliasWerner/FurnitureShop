import { IGlobalState } from '../../store/globalState';
import { connect } from 'react-redux';
import { Furniture, IFurnitureFuncs, IFurnitureParams } from './furniture';
import { getFurnitureById } from '../../store/furniture/furnitureActions';
import { addToCart } from '../../store/shoppingCard/shoppingCartActions';
import { IFurniture } from '../../models/IFurniture';

const mapStateToProps = (state: IGlobalState): IFurnitureParams => {
  return {
    furniture: state.furniture.currentFurniture,
    furnitureLoadStatus: state.furniture.furnitureLoadStatus,
  };
};

const mapDispatchToProps = (dispatch: any): IFurnitureFuncs => {
  return {
    getFurnitureById: (furnitureId: number) => {
      dispatch(getFurnitureById(furnitureId));
    },
    addToShoppingCart: (furniture: IFurniture) => {
      dispatch(addToCart(furniture));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);
