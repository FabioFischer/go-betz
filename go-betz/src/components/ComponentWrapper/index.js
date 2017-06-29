import { Component } from 'react';


class ComponentWrapper extends Component {
  get services() {

  }

  goTo(route, params = { }) {
    const oldParams = this.props.location.state;
    const newParams = { };

    const state = {
      services: this.services
    };

    const loc = {
      pathname: `/${route}`,
      state
    };

    this.props.history.push(loc);
  }

  goBack() {

  }
}

// }

// export default ComponentWrapper;

// import _ from 'lodash';
// import { Component } from 'react';

// export default class PyxisComponent extends Component {
//   get services() {
//     return _.get(this.props.navigation, 'state.params.services');
//   }

//   navigate(routeName, params = {}) {
//     const navigateOldParams = _.get(this.props.navigation, 'state.params.navigateParams');
//     const newParams = {};

//     this.props.navigation.navigate(routeName, _.assign(newParams, {
//       services: this.services,
//       navigateParams: [routeName, newParams],
//       navigateOldParams
//     }, params));
//   }

//   goBack() {
//     const navigateOldParams = _.get(this.props.navigation, 'state.params.navigateOldParams');
//     this.props.navigation.navigate(...navigateOldParams);
//   }

//   isMaintainer() {
//     return true;
//   }
// }