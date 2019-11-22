import React from 'react';

import './CollectionItem.scss';

export default function CollectionItem({ id, name, imageUrl, price }) {
  return (
    <div key={id} className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <button>Shop now</button>
      </div>
      <div className="collection-footer">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
