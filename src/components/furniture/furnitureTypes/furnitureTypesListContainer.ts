import { IGlobalState } from '../../../store/globalState';
import { connect } from 'react-redux';
import {
  IFurnitureTypesParams,
  IFurnitureTypesFuncs,
  FurnitureTypesList,
} from './furnitureTypesList';
import { getMainFurnitureTypes } from '../../../store/furnitureTypes/furnitureTypesActions';

const mapStateToProps = (state: IGlobalState): IFurnitureTypesParams => {
  return {
    furnitureTypes: state.furnitureTypes.furnitureTypes,
    loadingStatus: state.furnitureTypes.furnitureTypesLoadStatus,
  };
};

const mapDispatchToProps = (dispatch: any): IFurnitureTypesFuncs => {
  return {
    getFurnitureTypes: () => {
      dispatch(getMainFurnitureTypes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureTypesList);
