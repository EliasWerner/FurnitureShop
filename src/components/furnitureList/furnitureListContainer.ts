import { IGlobalState } from '../../store/globalState';
import { connect } from 'react-redux';
import {
  FurnitureList,
  IFurnitureListFuncs,
  IFurnitureListParams,
} from './furnitureList';
import { IFurnitureType } from '../../models/IFurnitureType';
import { getFurnitureTypeById } from '../../store/furnitureTypes/furnitureTypesActions';
import { getFurnituresByTypes } from '../../store/furniture/furnitureActions';

interface IFurnitureListOwnProps {
  parentTypeId: number;
}

const mapStateToProps = (
  state: IGlobalState,
  ownProps: IFurnitureListOwnProps
): IFurnitureListParams => {
  return {
    parentTypeId: ownProps.parentTypeId,
    furnitureParentType: state.furnitureTypes.selectedFurnitureType,
    furnitureSubtypes: state.furnitureTypes.furnitureTypes,
    furniture: state.furniture.furniture,
    loadStatus:
      state.furniture.furnitureLoadStatus &&
      state.furnitureTypes.furnitureTypesLoadStatus,
  };
};

const mapDispatchToProps = (dispatch: any): IFurnitureListFuncs => {
  return {
    getFurnitureType: (typeId: number) => {
      dispatch(getFurnitureTypeById(typeId));
    },
    getFurnitureForTypes: (types: IFurnitureType[]) => {
      dispatch(getFurnituresByTypes(types));
    },
    getFurnitureSubtypes: (parentType: IFurnitureType) => {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureList);
