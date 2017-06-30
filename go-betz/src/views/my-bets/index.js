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
    try {
      let bets = await this.services.betsRepository.all({
        userId: this.services.currentUser.id
      });

      this.setState({
        bets
      });
    } catch (err) {
      alert('Erro ao tentar obter suas apostas');
    }

  }

  goToMatch(bet) {
    this.goTo('match', {
      match: { id: bet.match_id },
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