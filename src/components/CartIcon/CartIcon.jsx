import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cartActions';

import './CartIcon.scss';

function CartIcon({ toggleCartDropdown, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = {
  toggleCartDropdown
};

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.itemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
