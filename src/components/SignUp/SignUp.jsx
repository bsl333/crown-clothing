import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

import './SignUp.scss';

export default class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div className="sign-up-container">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            id="display name"
            name="displayName"
            label="display name"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            id="confirm password"
            name="confirmPassword"
            label="confirm password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
