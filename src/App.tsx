import './App.css'

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Buyflow from './buyflow/Buyflow';
import { ProductIds } from './buyflow/Buyflow.types';
import React from 'react';
import logo from './logo.svg'

const App = () => {
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
            <p>Welcome to Getsafe's Insurance Buyflow</p>
            <Link to="/buy/insurance_dev">Buy Developer Insurance</Link>
            <br />
            <Link to="/buy/insurance_designer">Buy Designer Insurance</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
