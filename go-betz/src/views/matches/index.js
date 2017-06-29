import React from 'react';

import { Match, ComponentWrapper } from './../../components';

class Matches extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      matches: []
    };
  }

  async componentDidMount() {
    const matches = await this.services.matches.all();

    this.setState({
      matches
    });
  }

  goToMatch(match) {
    this.goTo('match-detail', { match });
  }

  render() {
    return (
      <div className='matches page inner-page'>
        <div className='matches--content'>
          <h3>Partidas</h3>
          <div className='matches--wrapper'>
            {
              this.state.matches.map((match, index) => (
                <Match onClick={() => this.goToMatch(match)} key={index} {...match} />)
              )
            }
          </div>
        </div>
      </div>
    );
  }
}


export default Matches;