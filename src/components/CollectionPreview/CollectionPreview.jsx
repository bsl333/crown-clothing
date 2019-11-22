import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const renderCard = ({ id, ...collectionItemProps }) => (
  <CollectionItem key={id} {...collectionItemProps} />
);

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{items.slice(0, 4).map(renderCard)}</div>
    </div>
  );
}

export default CollectionPreview;
