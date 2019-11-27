import React from 'react';
import { connect } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

function CheckoutItem({
  item,
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart
}) {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
