import React from 'react';

import { Match, Button, ComponentWrapper } from './../../components';

class MyBets extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      match: { },
    };
  }

  async componentDidMount() {
    //grab match

    const match = {
      id: 1,
      teamA: { name: 'Fnatic', id: 1 },
      teamB: { name: 'SK Gaming', id: 2 },
      description: 'Match XYZ'
    };

    this.setState({
      match
    });
  }

  onNewBet() {
    this.goTo('new-bet', {
      match: { }
    });
  }

  goBack() {
    this.goTo('matches');
  }

  render() {
    return (
      <div className='match-detail page inner-page'>
        <div className='match-detail--content'>
          <div className='match-detail--wrapper'>
            <Match {...this.state.match} />
          </div>
          <div className='match-detail--actions'>
            <Button text='Nova aposta' onClick={() => this.onNewBet()} />
            <Button text='Voltar' onClick={() => this.goBack()} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyBets;