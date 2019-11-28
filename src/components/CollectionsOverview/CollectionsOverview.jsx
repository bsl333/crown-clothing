import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import './CollectionsOverview.scss';

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      <h1>Collections</h1>
      {collections.map(({ id, ...productInfo }) => {
        return <CollectionPreview key={id} {...productInfo} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
