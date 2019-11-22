import React from 'react';
import productCatalog from '../../mock-data/shoppingData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
  state = {
    productCatalog
  };
  renderCollectionPreview = productCatalog =>
    productCatalog.map(({ id, ...productInfo }) => {
      return <CollectionPreview key={id} {...productInfo} />;
    });
  render() {
    return (
      <div className="collection-preview">
        <h1>Collections</h1>
        {this.renderCollectionPreview(this.state.productCatalog)}
      </div>
    );
  }
}

export default ShopPage;
