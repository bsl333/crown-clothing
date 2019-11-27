import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

function CheckoutItem({ item: { name, imageUrl, quantity, price } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div>&#10005;</div>
    </div>
  );
}

const mapDispatchToProps = { addItemToCart };

export default connect(null, mapDispatchToProps)(CheckoutItem);
