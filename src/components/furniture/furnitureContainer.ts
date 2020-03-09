import { IGlobalState } from '../../store/globalState';
import { connect } from 'react-redux';
import { Furniture, IFurnitureFuncs, IFurnitureParams } from './furniture';
import { getFurnitureById } from '../../store/furniture/furnitureActions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);
