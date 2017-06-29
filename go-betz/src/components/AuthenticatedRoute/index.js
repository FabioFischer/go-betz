import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import _ from 'lodash';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const renderMethod = props => {
    const currentUser = _.get(props.location, 'state.services.currentUser');
    
    if (!currentUser) {
      alert('Você não possui permissão para visualizar essa página (´•ᴥ•`)');
      return (<Redirect to={{ pathname: 'sign-in', state: { from: props.location } }} />);
    }

    return (<Component {...props} />)
  };

  return (
    <Route {...rest} render={props => renderMethod(props) } />
  );
};

export default AuthenticatedRoute;