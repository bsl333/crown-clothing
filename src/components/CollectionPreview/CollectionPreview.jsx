import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const renderCards = item => <CollectionItem key={item.id} item={item} />;

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{items.slice(0, 4).map(renderCards)}</div>
    </div>
  );
}

export default CollectionPreview;
