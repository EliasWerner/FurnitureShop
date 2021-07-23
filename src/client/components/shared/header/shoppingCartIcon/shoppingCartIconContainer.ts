import { IGlobalState } from '../../../../store/globalState';
import { connect } from 'react-redux';
import { ShoppingCartIcon, IShoppingCartProps } from './shoppingCartIcon';

const mapStateToProps = (state: IGlobalState): IShoppingCartProps => {
  return {
    itemsAmount: state.shoppingCart.shoppingCartItems.length,
  };
};

export default connect(mapStateToProps, {})(ShoppingCartIcon);
