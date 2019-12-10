import React from 'react';

import { CustomButtonContainer } from './CustomButton.style';
export default function CustomButton(props) {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
}
