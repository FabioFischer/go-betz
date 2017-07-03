import React from 'react';

import { FlatButton } from 'material-ui';

import { ls } from './../services';

const AdministrativeButton = ({ ...rest }) => {
  const currentAdmin = ls.get('x-admin-token');

  if (!currentAdmin) return <span></span>;

  return <FlatButton {...rest} />
};

export default AdministrativeButton;