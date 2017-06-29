import _ from 'lodash';

import { Component } from 'react';

class ComponentWrapper extends Component {
  get services() {
    return _.get(this.props.location, 'state.services');    
  }

  goTo(route, params = { }) {
    const oldParams = _.get(this.props.location, 'state.goToParams');
    const newParams = { };

    const state = _.assign(newParams, { 
      services: this.services,
      oldParams,
      goToParams: [route, newParams]
    }, params);
    
    const loc = {
      pathname: `/${route}`,
      state
    };

    this.props.history.push(loc);
  }
}

export default ComponentWrapper;