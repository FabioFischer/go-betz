import React from 'react';
import './new-match.css';

import { Field, Button, Picker, ComponentWrapper } from './../../components';

class NewMatch extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      teamA: '',
      teamB: '',
      date: '',
      teams: []
    };
  }

  onFieldChange(field, event) {
    const obj = {};

    obj[field] = event.target.value

    this.setState(obj);
  }

  goBack() {
    this.goTo('matches');
  }

  async onSave() {
    const model = {
      teamA: this.state.teamA,
      teamB: this.state.teamB,
      description: this.state.description,
      date: this.state.date
    };

    try {
      await this.services.matchesRepository.save(model);
      this.goBack();
    } catch (err) {
      alert('Erro ao salvar partida');
    }
  }

  async componentDidMount() {
    const teams = await this.teamsRepository.all();

    // const teams = [
    //   { id: 9, name: 'Fnatic' },
    //   { id: 6, name: 'TSM' },
    //   { id: 5, name: 'SK Gaming' },
    //   { id: 1, name: 'Virtus Pro' },
    //   { id: 2, name: 'Liquid' },
    //   { id: 3, name: 'NaVi' },
    //   { id: 4, name: 'Astralis' },
    // ];

    this.setState({
      teams
    })
  }

  render() {
    return (
      <div className='new-match page upner--page'>
        <div className='new-match--content'>
          <h3>Nova partida</h3>
          <div className='new-match--form'>
            <Field type='text' value={this.state.description} onChange={e => this.onFieldChange('description', e)} placeholder='Título' name='description' />
            <Picker values={this.state.teams} value={this.state.teamA} onChange={e => this.onFieldChange('teamA', e)} placeholder='Time A' name='teamA' />
            <Picker values={this.state.teams} value={this.state.teamB} onChange={e => this.onFieldChange('teamB', e)} placeholder='Time B' name='teamB' />
            <Field type='datetime-local' value={this.state.date} onChange={e => this.onFieldChange('date', e)} placeholder='Data' name='date' />
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

export default NewMatch;