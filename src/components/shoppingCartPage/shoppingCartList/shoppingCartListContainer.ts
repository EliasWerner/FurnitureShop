import { IGlobalState } from '../../../store/globalState';
import { connect } from 'react-redux';
import { ShoppingCartList, IShoppingCartListProps } from './shoppingCartList';

const mapStateToProps = (state: IGlobalState): IShoppingCartListProps => {
  return { items: state.shoppingCart.shoppingCartItems };
};

export default connect(mapStateToProps, {})(ShoppingCartList);
