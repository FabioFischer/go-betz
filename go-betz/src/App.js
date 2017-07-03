import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  AuthenticatedRoute,
  AdministrativeRoute
} from './components';

import {
  About, Matches, NewMatch, MyBets, Signin, Signup, AddCredits, NewTeam, Home, GiveAdmin, NewRole
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
          <AuthenticatedRoute path='/my-bets' component={MyBets} />
          <AuthenticatedRoute path='/add-credits' component={AddCredits} />
          <AdministrativeRoute path='/new-match' component={NewMatch} />
          <AdministrativeRoute path='/new-team' component={NewTeam} />
          <AdministrativeRoute path='/give-admin' component={GiveAdmin} />
          <AdministrativeRoute path='/new-role' component={NewRole} />
        </div>
      </Router>
    </div>
  </div>
);

export default GoBetz;
