import React, { Component } from 'react';
import { Bet } from './../../components';

class MyBets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bets: []
    };
  }

  componentDidMount() {
    //grab bets
    
    const bets = [
      { matchId: 1, title: 'Match ABC', pick: 'Team A', date: '23/05/2017 18:00', value: 2, status: 'winner' },
      { matchId: 5, title: 'Match DEF', pick: 'Team B', date: '23/05/2017 18:00', value: 9, status: 'winner' },
      { matchId: 12, title: 'Match ZYX', pick: 'Team A', date: '23/05/2017 18:00', value: 21, status: 'looser' },
      { matchId: 3, title: 'Match SAD', pick: 'Team B', date: '23/05/2017 18:00', value: 3, status: 'winner' },
      { matchId: 2, title: 'Match NOP', pick: 'Team A', date: '23/05/2017 18:00', value: 17, status: 'looser' },
      { matchId: 9, title: 'Match SSS', pick: 'Team B', date: '23/05/2017 18:00', value: 5, status: 'winner' }
    ];

    this.setState({
      bets
    });
  }

  goToMatch(bet) {
    //navigate to match
    
    const { matchId } = bet;

    this.props.history.push(
      'match', matchId
    );
  }

  render() {
    return (
      <div className='bets page inner-page'>
        <div className='bets--content'>
          <h3>Partidas</h3>
          <div className='bets--wrapper'>
            { this.state.bets.map((bet, index) => <Bet onClick={() => this.goToMatch(bet)} key={index} {...bet} />) }
          </div>
        </div>
      </div>
    );
  }
}

export default MyBets;