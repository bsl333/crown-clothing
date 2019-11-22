import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

import './App.scss';

export default function App() {
  return (
    <div className="container">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
    </div>
  );
}
