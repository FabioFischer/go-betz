import React from 'react';

import { FlatButton } from 'material-ui';

import { ls } from './../services';

const AuthenticatedButton = ({ ...rest }) => {
  const currentUser = ls.get('current_user');

  if (!currentUser) return <span></span>;

  return <FlatButton {...rest} />
};

export default AuthenticatedButton;