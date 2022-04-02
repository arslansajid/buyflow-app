import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Buyflow from './containers/Buyflow';
import Home from './containers/Home';
import { ProductIds } from './types/Buyflow.types';
import React from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_designer">
            <Buyflow productId={ProductIds.desIns} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
