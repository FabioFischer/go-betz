import React from 'react';
// import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  AuthenticatedRoute,
  AdministrativeRoute
} from './components';

import {
  About,
  Matches, NewMatch,
  // MyBets, NewBet,
  Signin, Signup,
  // AddFunds,
  NewTeam,
  Home
} from './views';


const GoBetz = () => (
  <div className='app'>
    <div className='app--content'>
      <Router>
        <div>
          <Route component={Home} />
          <Route path="/about" component={About} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/sign-in' component={Signin} />
          <Route path='/matches' component={Matches} />
          <AdministrativeRoute path='/new-match' component={NewMatch} />
          <AdministrativeRoute path='/new-team' component={NewTeam} />
        </div>
      </Router>
    </div>
  </div>
);

export default GoBetz;
