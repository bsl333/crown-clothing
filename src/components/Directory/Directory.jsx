import React from 'react';
import sections from '../../mock-data/mockData';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

export default class Directory extends React.Component {
  state = {
    sections
  };

  renderSections = section => <MenuItem key={section.id} {...section} />;

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(this.renderSections)}
      </div>
    );
  }
}
