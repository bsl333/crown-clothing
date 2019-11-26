import React from 'react';

import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function CollectionItem({ id, name, imageUrl, price }) {
  return (
    <div key={id} className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <CustomButton inverted>Add To Cart</CustomButton>
      </div>
      <div className="collection-footer">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
