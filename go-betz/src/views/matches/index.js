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
      { description: 'Partida I', teamA: { id: 1, name: 'Fnatic' }, teamB: { id: 2, name: 'SK Gaming' }, date: new Date().toLocaleString(), winner: { id: 1 } },
      { description: 'Partida II', teamA: { id: 1, name: 'Fnatic' }, teamB: { id: 2, name: 'SK Gaming' }, date: new Date().toLocaleString(), winner: { id: 2 } },
      { description: 'Partida III', teamA: { id: 1, name: 'Fnatic' }, teamB: { id: 2, name: 'SK Gaming' }, date: new Date().toLocaleString(), winner: { } },
      { description: 'Partida IV', teamA: { id: 1, name: 'Fnatic' }, teamB: { id: 2, name: 'SK Gaming' }, date: new Date().toLocaleString(), winner: { } },
      { description: 'Partida VI', teamA: { id: 1, name: 'SK Gaming' }, teamB: { id: 3, name: 'Liquid' }, date: new Date().toLocaleString(), winner: { } },
      { description: 'Partida VII', teamA: { id: 1, name: 'Fnatic' }, teamB: { id: 2, name: 'SK Gaming' }, date: new Date().toLocaleString(), winner: { } },
      { description: 'Partida VIII', teamA: { id: 1, name: 'Fnatic' }, teamB: { id: 7, name: 'Virtus Pro' }, date: new Date().toLocaleString(), winner: { } }
    ];

    this.setState({
      matches
    });
  }

  goToMatch(match) {
    this.props.history.push(
      'match-detail', match
    );
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