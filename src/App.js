import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

import './App.scss';
import Header from './components/Header/Header';
import SignInRegisterPage from './pages/SignInRegisterPage/SignInRegisterPage';
import { createUserProfileDocument } from './firebase/firebaseUtils';

import { auth } from './firebase/firebaseUtils';

export default class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  setCurrentUser = userSnapShot => {
    const currentUser = {
      id: userSnapShot,
      ...userSnapShot.data()
    };
    this.setState({
      currentUser
    });
  };

  componentDidMount() {
    // onAuthStateChanged returns a function to unsubscribe from onAuthStateChanged observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(this.setCurrentUser);
        } catch (error) {
          console.error(error);
        }
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
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
