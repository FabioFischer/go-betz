import React from 'react';
import './new-team.css';

import { Field, Button, ComponentWrapper } from './../../components';

class NewTeam extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
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
      name: this.state.name
    };

    try {
      await this.services.teamsRepository.save(model);

      this.goBack();
    } catch (err) {
      alert('Erro ao salvar time');
    }
  }

  render() {
    return (
      <div className='new-team page upner--page'>
        <div className='new-team--content'>
          <h3>Novo time</h3>
          <div className='new-team--form'>
            <Field type='text' value={this.state.name} onChange={e => this.onFieldChange('name', e)} placeholder='Nome' name='name' />
          </div>
          <div className='new-team--actions'>
            <Button text='Salvar' onClick={() => this.onSave()} />
            <Button text='Cancelar' onClick={() => this.goBack()} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewTeam;