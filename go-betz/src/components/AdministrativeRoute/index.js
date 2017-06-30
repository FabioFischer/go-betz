import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import _ from 'lodash';

const AdministrativeRoute = ({ component: Component, ...rest }) => {
  const renderMethod = props => {
    // const currentUser = _.get(props.location, 'state.services.currentUser');

    // const redirect = (<Redirect to={{ pathname: 'sign-in', state: { from: props.location } }} />);

    // if (!currentUser) return redirect;
    // if (!currentUser.isAdmin) return redirect;

    return (<Component {...props} />);
  };

  return (
    <Route {...rest} render={props => renderMethod(props)} />
  );
};

export default AdministrativeRoute;