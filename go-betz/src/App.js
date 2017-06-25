import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { About } from './views';

const App = () => (
  <div className='app'>
    <div className='app--content'>
      <Router>
        <Route path="/about" component={About} />
      </Router>
    </div>
  </div>
);

export default App;
