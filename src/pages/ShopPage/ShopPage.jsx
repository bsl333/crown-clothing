import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { selectShopCollections } from '../../redux/shop/shopSelector';

const renderCollectionPreview = collections =>
  collections.map(({ id, ...productInfo }) => {
    return <CollectionPreview key={id} {...productInfo} />;
  });
function ShopPage({ collections }) {
  return (
    <div className="collection-preview">
      <h1>Collections</h1>
      {renderCollectionPreview(collections)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});
export default connect(mapStateToProps)(ShopPage);
