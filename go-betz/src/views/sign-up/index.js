import React from 'react';
import './sign-up.css';

import { Field, Button, ComponentWrapper } from './../../components';

import Auth from './../../services/auth';

class Signup extends ComponentWrapper {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onFieldChange(field, event) {
    const obj = {};

    obj[field] = event.target.value

    this.setState(obj);
  }

  async onRegister() {
    try {
      const services = await Auth.signUp('http://localhost:51053', {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      });

      this.goTo('matches', { services });
    } catch (err) {
      alert('Falha ao logar');
    }
  }

  goBack() {
    this.goTo('sign-in');
  };

  render() {
    return (
      <div className='sign-up page upner--page'>
        <div className='sign-up--content'>
          <h3>Novo registro</h3>
          <div className='sign-up--form'>
            <Field type='email' value={this.state.email} onChange={e => this.onFieldChange('email', e)} placeholder='Email' name='email' />
            <Field type='text' value={this.state.username} onChange={e => this.onFieldChange('username', e)} placeholder='Usuário' name='username' />
            <Field type='password' value={this.state.password} onChange={e => this.onFieldChange('password', e)} placeholder='Senha' name='password' />
          </div>
          <div className='sign-up--action'>
            <Button text='Cadastrar' onClick={() => this.onRegister()} />
            <Button text='Voltar' onClick={() => this.goBack()} />
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;