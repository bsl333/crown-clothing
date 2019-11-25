import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go To Check Out</CustomButton>
    </div>
  );
}
