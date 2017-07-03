import React from 'react';

import { Bet, AuthenticatedButton } from './../../components';

import { ls, bet } from './../../services';

class MyBets extends React.Component {
  state = {
    bets: []
  };

  handleGoBack = () => this.props.history.push('matches');
  handleAddCredits = () => this.props.history.push('add-credits');
  handleRecoverCredits = () => this.props.history.push('recover-credits');

  async componentDidMount() {
    const currentUser = ls.get('current_user');

    const requestBody = {
      userId: currentUser ? currentUser.id : 0
    };

    try {
      const bets = await bet.listBets(requestBody);

      this.setState({
        bets
      });
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  }

  render() {
    return (
      <div className='bets page'>
        <div className='bets--content'>
          <h2>MY BETS</h2>
          <div className='bets--actions'>
            <AuthenticatedButton label='go back' primary onTouchTap={this.handleGoBack} />
            <AuthenticatedButton label='add credits' primary onTouchTap={this.handleAddCredits} />
            <AuthenticatedButton label='recover credits' primary onTouchTap={this.handleRecoverCredits} />
          </div>
          <div className='bets--wrapper'>
            {this.state.bets.map(bet => <Bet key={bet.id} {...bet} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default MyBets;