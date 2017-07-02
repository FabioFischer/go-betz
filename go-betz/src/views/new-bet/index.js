import React from 'react';

import _ from 'lodash';

import { Field, Button, Picker, ComponentWrapper } from './../../components';

class NewBet extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      team: '',
      value: 0
    };
  }

  get match() {
    return _.get(this.props.location, 'state.match');
  }

  onFieldChange(field, event) {
    const obj = {};

    obj[field] = event.target.value

    this.setState(obj);
  }

  componentDidMount() {
    const teams = [
      { id: 1, name: 'Fnatic' },
      { id: 2, name: 'olar' }
      // this.match.teamA, this.match.teamB
    ];

    this.setState({
      teams
    });
  }

  goBack() {
    this.goTo('matches')
  }

  async onSave() {
    try {
      const model = {
        matchId: this.match ? this.match.id : 0,
        value: this.state.value,
        team: this.state.team,
        date: new Date().toLocaleString(),
        userId: this.services.currentUser.id
      };

      await this.services.betsRepository.save(model);

      this.goTo('my-bets');
    } catch (err) {
      alert('Erro ao realizar aposta');
    }
  }

  render() {
    return (
      <div className='new-bet page upner--page'>
        <div className='new-bet--content'>
          <h3>Nova aposta</h3>
          <div className='new-bet--form'>
            <Picker values={this.state.teams} value={this.state.team} onChange={e => this.onFieldChange('team', e)} placeholder='Time' name='team' />
            <Field type='number' value={this.state.value} onChange={e => this.onFieldChange('value', e)} placeholder='Valor' name='value' />
          </div>
          <div className='new-bet--actions'>
            <Button text='Salvar' onClick={() => this.onSave()} />
            <Button text='Cancelar' onClick={() => this.goBack()} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewBet;