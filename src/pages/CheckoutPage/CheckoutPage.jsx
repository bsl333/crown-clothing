import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotalCast
} from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
const renderHeader = () => {
  return headers.map(header => (
    <div key={header} className="header-block">
      <span>{header}</span>
    </div>
  ));
};

function CheckoutPage({ cartItems, cartTotalCost }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">{renderHeader()}</div>
      <div className="cart-items">
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total-cost">TOTAL: ${cartTotalCost}</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalCost: selectCartTotalCast
});

export default connect(mapStateToProps)(CheckoutPage);
