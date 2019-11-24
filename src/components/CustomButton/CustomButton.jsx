import React from 'react';

import './CustomButton.scss';

export default function CustomButton({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
