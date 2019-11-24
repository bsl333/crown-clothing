import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';

const EMAIL = 'email';
const PASSWORD = 'password';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      alert('invalid sign in');
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="sign-in-container">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type={EMAIL}
            name={EMAIL}
            id={EMAIL}
            label={EMAIL}
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            autoComplete="current-user"
            type={PASSWORD}
            name={PASSWORD}
            id={PASSWORD}
            label={PASSWORD}
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
