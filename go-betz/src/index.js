import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import GoBetz from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <GoBetz />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();