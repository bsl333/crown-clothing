import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

import './App.scss';
import Header from './components/Header/Header';
import SignInRegisterPage from './pages/SignInRegisterPage/SignInRegisterPage';

import { auth } from './firebase/firebaseUtils';

export default class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChanged returns a function to unsubscribe from onAuthStateChanged observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInRegisterPage} />
      </div>
    );
  }
}
