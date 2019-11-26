import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';

import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';

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

const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
