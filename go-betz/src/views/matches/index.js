import React, { Component } from 'react';

import { Match } from './../../components';

class Matches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: []
    };
  }

  componentDidMount() {
    //grab matches
    
    const matches = [
      { title: 'PQR', teamA: 'Team A', teamB: 'Team B', format: 'BO3', date: '23/05/2017 18:00', victory: 'Team A'},
      { title: 'MNO', teamA: 'Team A', teamB: 'Team B', format: 'BO3', date: '23/05/2017 18:00', victory: 'Team B'},
      { title: 'JKL', teamA: 'Team A', teamB: 'Team B', format: 'BO3', date: '23/05/2017 18:00', victory: 'Team A'},
      { title: 'GHI', teamA: 'Team A', teamB: 'Team B', format: 'BO3', date: '23/05/2017 18:00'},
      { title: 'DEF', teamA: 'Team A', teamB: 'Team B', format: 'BO3', date: '23/05/2017 18:00', victory: 'Team A'},
      { title: 'ABC', teamA: 'Team A', teamB: 'Team B', format: 'BO3', date: '23/05/2017 18:00'}
    ];

    this.setState({
      matches
    });
  }

  goToMatch(match) {
    //navigate to match

    this.props.history.push(
      'match', match
    );
  }

  render() {
    return (
      <div className='matches page inner-page'>
        <div className='matches--content'>
          <h3>Partidas</h3>
          <div className='matches--wrapper'>
            { this.state.matches.map((match, index) => <Match onClick={() => this.goToMatch(match)} key={index} {...match} />) }
          </div>
        </div>
      </div>
    );
  }
}


export default Matches;