import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';

import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(({ id, ...itemProps }) => (
          <CartItem key={id} {...itemProps} />
        ))}
      </div>
      <CustomButton>Go To Check Out</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({ cartItems: cart.cartItems });

export default connect(mapStateToProps)(CartDropdown);
