import React, { Component } from 'react';

import { Match, Button } from './../../components';

class MyBets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: { },
    };
  }

  componentDidMount() {
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
    this.props.history.push(
      'new-bet', { match: this.state.match }
    );
  }

  goBack() {
    this.props.history.push(
      'matches'
    );
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