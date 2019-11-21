import React from 'react';
// allows us to avoid prop drilling (sending props thru multiple children) and have access to history prop
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

function MenuItem({ title, imageUrl, size, match, history }) {
  const menuItemClass = size ? `${size} menu-item` : 'menu-item';
  console.log(match);
  console.log(history);
  return (
    <div
      className={menuItemClass}
      onClick={() => history.push(`${match.url}${title}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
