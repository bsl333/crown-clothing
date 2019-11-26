import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { addItemToCart } from '../../redux/cart/cartActions';
import './CollectionItem.scss';

function CollectionItem({ item, addItemToCart }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <CustomButton onClick={() => addItemToCart(item)} inverted>
          Add To Cart
        </CustomButton>
      </div>
      <div className="collection-footer">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addItemToCart
};

export default connect(null, mapDispatchToProps)(CollectionItem);
