import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CartDropdown.scss';

function CartDropdown({ cartItems, history }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(({ id, ...itemProps }) => (
            <CartItem key={id} {...itemProps} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        Go To Check Out
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
