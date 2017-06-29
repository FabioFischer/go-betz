import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  AuthenticatedRoute,
  AdministrativeRoute
} from './components';

import {
  About,
  Matches, NewMatch, MatchDetail,
  MyBets, NewBet,
  Signin, Signup,
  AddFunds,
  NewTeam
} from './views';


const App = () => (
  <div className='app'>
    <div className='app--content'>
      <Router>
        <div>
          <Route path="/about" component={About} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/sign-in' component={Signin} />
          <Route path='/matches' component={Matches} />
          <AdministrativeRoute path='/new-match' component={NewMatch} />
          <Route path='/match-detail' component={MatchDetail} />
          <AuthenticatedRoute path='/my-bets' component={MyBets} />
          <AuthenticatedRoute path='/new-bet' component={NewBet} />
          <AuthenticatedRoute path='/add-funds' component={AddFunds} />
          <AdministrativeRoute path='/new-team' component={NewTeam} />
        </div>
      </Router>
    </div>
  </div>
);

export default App;
