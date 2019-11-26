import React from 'react';

import './CustomButton.scss';

const createClassName = (isGoogleSignIn, inverted) => {
  let style = 'custom-button';
  if (inverted) {
    style += ' inverted';
  }
  if (isGoogleSignIn) {
    style += ' google-sign-in';
  }
  return style;
};

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...props
}) {
  return (
    <button className={createClassName(isGoogleSignIn, inverted)} {...props}>
      {children}
    </button>
  );
}
