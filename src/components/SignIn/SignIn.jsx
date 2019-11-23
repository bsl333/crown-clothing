import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const EMAIL = 'email';
const PASSWORD = 'password';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="sign-in-container">
        <h2>I already have an account</h2>
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
            type={PASSWORD}
            name={PASSWORD}
            id={PASSWORD}
            label={PASSWORD}
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
