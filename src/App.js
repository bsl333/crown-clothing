import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInRegisterPage from './pages/SignInRegisterPage/SignInRegisterPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import Header from './components/Header/Header';
import Loader from 'react-loader-spinner';

import { createUserProfileDocument } from './firebase/firebaseUtils';
import { auth } from './firebase/firebaseUtils';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChanged returns a function to unsubscribe from onAuthStateChanged observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  renderApp() {
    if (this.props.currentUser === undefined) {
      return (
        <div className="loader">
          <span className="loader-text">loading...</span>
          <Loader
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
            visible={true}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => {
            return this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInRegisterPage />
            );
          }}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </div>
    );
  }

  render() {
    return this.renderApp();
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = { setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
