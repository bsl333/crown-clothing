import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

const HatsPage = () => <div>Hats Page</div>;

export default function App() {
  return (
    <div className="container">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component={HatsPage}></Route>
    </div>
  );
}
