import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { Auth } from './../../services';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => (Auth.isAuthenticated() ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: 'sign-in', state: { from: props.location } }} />)
    )}
  />
);

export default PrivateRoute;