import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/MenuItem';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import './Directory.scss';

const renderSections = ({ id, ...sectionProps }) => {
  return <MenuItem key={id} {...sectionProps} />;
};

function Directory({ sections }) {
  return <div className="directory-menu">{sections.map(renderSections)}</div>;
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
