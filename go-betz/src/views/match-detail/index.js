import React from 'react';
import _ from 'lodash';

import { Match, Button, ComponentWrapper } from './../../components';

class MyBets extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = { match: {} };
  }

  async componentDidMount() {
    const matchId = _.get(this.props.location, 'state.match.id');
    const match = await this.services.matchesRepository.find(matchId);

    this.setState({ match });
  }

  onNewBet() {
    this.goTo('new-bet', { match: this.props.location.state.match });
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