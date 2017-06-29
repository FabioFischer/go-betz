import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { PrivateRoute } from './components';

import {
  About,
  Matches, NewMatch, MatchDetail,
  MyBets, NewBet,
  Signin, Signup,
  AddFunds
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
          <Route path='/new-match' component={NewMatch} />
          <Route path='/match-detail' component={MatchDetail} />
          <Route path='/my-bets' component={MyBets} />
          <Route path='/new-bet' component={NewBet} />
          <Route path='/add-funds' component={AddFunds} />
        </div>
      </Router>
    </div>
  </div>
);

export default App;
