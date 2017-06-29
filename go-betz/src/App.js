import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { PrivateRoute } from './components';

import { About, Matches, Signin, Signup, NewMatch } from './views';


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
        </div>
      </Router>
    </div>
  </div>
);

export default App;
