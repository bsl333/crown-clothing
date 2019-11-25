import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInRegisterPage from './pages/SignInRegisterPage/SignInRegisterPage';

import { createUserProfileDocument } from './firebase/firebaseUtils';
import { auth } from './firebase/firebaseUtils';

import { setCurrentUser } from './redux/user/userActions';

import './App.scss';

class App extends React.Component {
  // state = {
  //   currentUser: null
  // };

  unsubscribeFromAuth = null;

  // setCurrentUser = userSnapShot => {
  //   const currentUser = {
  //     id: userSnapShot.id,
  //     ...userSnapShot.data()
  //   };
  //   this.setState({
  //     currentUser
  //   });
  // };

  componentDidMount() {
    // onAuthStateChanged returns a function to unsubscribe from onAuthStateChanged observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.props.scu({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        this.props.scu(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInRegisterPage} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  scu: user => dispatch(setCurrentUser(user))
});

// const mapDispatchToProps = {
//   setCurrentUser
// };

export default connect(null, mapDispatchToProps)(App);
