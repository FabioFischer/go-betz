import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { ls } from './../../services';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const renderMethod = props => {
    const currentUser = ls.get('current_user');

    if (!currentUser) {
      alert('Não autorizado! 🤦🏻‍♂️');
      return (<Redirect to={{ pathname: 'sign-in', state: { from: props.location } }} />);
    };

    return (<Component {...props} />)
  };

  return (
    <Route {...rest} render={props => renderMethod(props)} />
  );
};

export default AuthenticatedRoute;