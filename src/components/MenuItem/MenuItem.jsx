import React from 'react';

import './MenuItem.scss';

export default function MenuItem({ title, imageUrl, size }) {
  const menuItemClass = size ? `${size} menu-item` : 'menu-item';
  return (
    <div className={menuItemClass}>
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
