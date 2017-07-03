import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { ls } from './../../services';

class AdministrativeRoute extends React.Component {
  renderMethod(props, Component) {
    const currentUser = ls.get('current_user');

    const redirect = (<Redirect to={{ pathname: 'sign-in', state: { from: props.location } }} />);

    if (!currentUser) {
      alert('Não autorizado! 🤦🏻‍♂️');
      return redirect;
    }

    const currentAdmin = ls.get('x-admin-token');

    if (!currentAdmin) {
      alert('Não autorizado! 🤦🏻‍♂️');
      return redirect;
    }

    return (<Component {...props} />);
  }

  render() {
    const { path, component } = this.props;

    return <Route path={path} render={p => this.renderMethod(p, component)} />
  }
};

export default AdministrativeRoute;