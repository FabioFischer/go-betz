import React from 'react';
import { Bet, ComponentWrapper } from './../../components';

class MyBets extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      bets: []
    };
  }

  async componentDidMount() {
    const bets = [
      { match: {}, team: { id: 7, name: 'Fnatic' }, value: 13, date: new Date().toLocaleString() },
      { match: {}, team: { id: 2, name: 'Virtus Pro' }, value: 9, date: new Date().toLocaleString() },
      { match: {}, team: { id: 3, name: 'Liquid' }, value: 2, date: new Date().toLocaleString() },
      { match: {}, team: { id: 9, name: 'SK Gaming' }, value: 21, date: new Date().toLocaleString() },
    ];

    this.setState({
      bets
    });
  }

  goToMatch(bet) {
    this.goTo('match', {
      match: { id: 0 },
      bet
    });
  }

  render() {
    return (
      <div className='bets page inner-page'>
        <div className='bets--content'>
          <h3>Minhas apostas</h3>
          <div className='bets--wrapper'>
            {this.state.bets.map((bet, index) => <Bet onClick={() => this.goToMatch(bet)} key={index} {...bet} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default MyBets;