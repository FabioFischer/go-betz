import React from 'react';

import { SelectField, MenuItem } from 'material-ui';

const Select = ({ items = [], ...rest }) => (
  <SelectField {...rest} >
    {items.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)}
  </SelectField>
);

export default Select;