import React from 'react';
import './add-funds.css';

import { Field, Button, Picker } from './../../components';

class AddFunds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      creditCard: '',
      expiration: '',
      cvv: '',
      name: '',
      address: '',
      cpf: '',
      fone: ''
    };
  }
  
  onFieldChange(field, event) {
    const obj = {};

    obj[field] = event.target.value

    this.setState(obj);
  }

  goBack() {
    this.props.history.goBack();
  }

  onSave() {
    //safe stuff

    this.props.history.push(
      'my-bets'
    );
  }

  render() {
    return (
      <div className='add-funds page upner--page'>
        <div className='add-funds--content'>
          <h3>Adicionar fundos</h3>
          <div className='add-funds--form'>
            <Field type='number' value={this.state.value} onChange={e => this.onFieldChange('value', e)} placeholder='Valor' name='value' />
            <Field type='text' value={this.state.creditCard} onChange={e => this.onFieldChange('creditCard', e)} placeholder='Cartão de crédito' name='creditCard' />
            <Field type='text' value={this.state.expiration} onChange={e => this.onFieldChange('expiration', e)} placeholder='Data de expiração' name='expiration' />
            <Field type='text' value={this.state.cvv} onChange={e => this.onFieldChange('cvv', e)} placeholder='Código de verificação' name='cvv' />
            <Field type='text' value={this.state.name} onChange={e => this.onFieldChange('name', e)} placeholder='Nome' name='name' />
            <Field type='text' value={this.state.cpf} onChange={e => this.onFieldChange('cpf', e)} placeholder='CPF' name='cpf' />
            <Field type='text' value={this.state.fone} onChange={e => this.onFieldChange('fone', e)} placeholder='Telefone' name='fone' />
          </div>
          <div className='add-funds--actions'>
            <Button text='Adicionar' onClick={() => this.onSave()} />
            <Button text='Cancelar' onClick={() => this.goBack()} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddFunds;