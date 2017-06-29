import React from 'react';
// import './new-match.css';

import { Field, Button, Picker, ComponentWrapper } from './../../components';

class NewBet extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      matchId: '',
      teams: [],
      team: '',
      value: 0
    };
  }
  
  onFieldChange(field, event) {
    const obj = {};

    obj[field] = event.target.value

    this.setState(obj);
  }

  componentDidMount() {
    //grap teams
    
    const teams = [
      { id: 1, name: 'Fnatic' },
      { id: 2, name: 'SK Gaming' }
    ];

    this.setState({
      teams
    });
  }

  goBack() {
    this.goTo('matches')
  }

  async onSave() {
    //safe stuff

   this.goTo('my-bets'); 
  }

  render() {
    return (
      <div className='new-match page upner--page'>
        <div className='new-match--content'>
          <h3>Nova aposta</h3>
          <div className='new-match--form'>
            <Picker values={this.state.teams} value={this.state.teamA} onChange={e => this.onFieldChange('teamA', e)} placeholder='Time' name='team' />
            <Field type='number' value={this.state.value} onChange={e => this.onFieldChange('value', e)} placeholder='Valor' name='value' />
          </div>
          <div className='new-match--actions'>
            <Button text='Salvar' onClick={() => this.onSave()} />
            <Button text='Cancelar' onClick={() => this.goBack()} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewBet;