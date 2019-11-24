import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInRegisterPage.scss';

export default function SignInRegisterPage() {
  return (
    <div className="sign-in-register-container">
      <SignIn />
      <SignUp />
    </div>
  );
}
