import { IGlobalState } from '../../../../store/globalState';
import { connect } from 'react-redux';
import {
  ShoppingCartListItem,
  IShoppingCartListItemFunc,
  IShoppingCartListItemParams,
} from './shoppingCartListItem';
import { IShoppingCartItem } from '../../../../models/IShoppingCartItem';
import {
  deleteFromCart,
  decreaseAmount,
  increaseAmount,
  setAmount,
} from '../../../../store/shoppingCard/shoppingCartActions';

export interface IShoppingCartListItemOwnProps {
  listItem: IShoppingCartItem;
}

const mapStateToProps = (
  state: IGlobalState,
  ownProps: IShoppingCartListItemOwnProps
): IShoppingCartListItemParams => {
  return {
    listItem: ownProps.listItem,
  };
};

const mapDispatchToProps = (dispatch: any): IShoppingCartListItemFunc => {
  return {
    deleteFromCart: (item: IShoppingCartItem) => {
      dispatch(deleteFromCart(item.furniture));
    },
    decreaseAmount: (item: IShoppingCartItem) => {
      dispatch(decreaseAmount(item.furniture));
    },
    increaseAmount: (item: IShoppingCartItem) => {
      dispatch(increaseAmount(item.furniture));
    },
    setAmount: (listItem: IShoppingCartItem, newAmount: number) => {
      dispatch(setAmount(listItem.furniture, newAmount));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartListItem);
