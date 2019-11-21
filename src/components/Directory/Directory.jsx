import React from 'react';
import sections from '../../mock-data/mockData';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

export default class Directory extends React.Component {
  state = {
    sections
  };

  renderSections = ({ id, ...sectionProps }) => {
    return <MenuItem key={id} {...sectionProps} />;
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(this.renderSections)}
      </div>
    );
  }
}
