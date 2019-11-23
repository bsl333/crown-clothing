import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import Register from '../../components/Register/Register';

import './SignInRegisterPage.scss';

export default function SignInRegisterPage() {
  return (
    <div className="sign-in-register-container">
      <SignIn />
      <Register />
    </div>
  );
}
