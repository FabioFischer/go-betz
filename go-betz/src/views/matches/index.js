import React from 'react';

import { Match } from './../../components';
import { FlatButton } from 'material-ui';

import { match } from './../../services';

class Matches extends React.Component {
  state = {
    matches: [],
  };

  handleNewMatch = () => this.props.history.push('new-match');
  handleNewTeam = () => this.props.history.push('new-team');

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
          <h2>Matches</h2>
          <div className='matches--actions'>
            <FlatButton label='new match' secondary onTouchTap={this.handleNewMatch} />
            <FlatButton label='new team' secondary onTouchTap={this.handleNewTeam} />
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