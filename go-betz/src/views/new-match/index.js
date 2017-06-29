import React from 'react';
import './new-match.css';

import { Field, Button } from './../../components';

class NewMatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      teamA: '',
      teamB: '',
      date: '',
    };
  }
  
  onFieldChange(field, event) {
    const obj = {};

    obj[field] = event.target.value

    this.setState(obj);
  }

  goBack() {
    this.props.history.push(
      'matches'
    );
  }

  onSave() {
    //safe stuff

    this.goBack();
  }

  render() {
    return (
      <div className='new-match page upner--page'>
        <div className='new-match--content'>
          <h3>Nova partida</h3>
          <div className='new-match--form'>
            <Field type='text' value={this.state.title} onChange={e => this.onFieldChange('title', e)} placeholder='Título' name='title' />
            <Field type='text' value={this.state.teamA} onChange={e => this.onFieldChange('teamA', e)} placeholder='Time A' name='teamA' />
            <Field type='text' value={this.state.teamB} onChange={e => this.onFieldChange('teamB', e)} placeholder='Time B' name='teamB' />
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