import React from 'react';

import { Match, AuthenticatedButton, AdministrativeButton } from './../../components';
import { FlatButton } from 'material-ui';

import { match, ls } from './../../services';

class Matches extends React.Component {
  state = {
    matches: [],
  };

  handleNewMatch = () => this.props.history.push('new-match');
  handleNewTeam = () => this.props.history.push('new-team');
  handleMyBets = () => this.props.history.push('my-bets');
  handleAdministrativeRole = () => this.props.history.push('give-admin');
  handleCreateRole = () => this.props.history.push('new-role');

  handleLogout = () => {
    ls.clear();

    this.props.history.push('sign-in');
  };

  handleLogin = () => {
    ls.clear();

    this.props.history.push('sign-in');
  };

  async componentDidMount() {
    const matches = await match.listMatches() || [];

    this.setState({
      matches
    });
  }

  render() {
    return (
      <div className='matches page'>
        <div className='matches--content'>
          <h2>MATCHES</h2>
          <div className='matches--actions'>
            <AdministrativeButton label='new match' secondary onTouchTap={this.handleNewMatch} />
            <AdministrativeButton label='new team' secondary onTouchTap={this.handleNewTeam} />
            <AuthenticatedButton label='my bets' primary onTouchTap={this.handleMyBets} />
            <AdministrativeButton label='give admin' secondary onTouchTap={this.handleAdministrativeRole} />
            <AdministrativeButton label='create role' secondary onTouchTap={this.handleCreateRole} />
            <AuthenticatedButton label='logout' primary onTouchTap={this.handleLogout} />
            {!ls.get('x-access-token') && <FlatButton label='login' primary onTouchTap={this.handleLogin} />}
          </div>
          <div className='matches--list'>
            {
              this.state.matches.map(match => <Match {...match} key={match.id} />)
            }
          </div>
        </div>
      </div>
    );
  }
}


export default Matches;