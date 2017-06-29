import React from 'react';

import './sign-in.css';

import { Field, Button } from './../../components';

import { Auth } from './../../services';

class Signin extends React.Component {
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

  onLogin() {
    Auth.login();

    this.props.history.push(
      'matches'
    );
  }

  onSignUp() {
    this.props.history.push(
      'sign-up'
    );
  }

  render() {
    return (
      <div className='sign-in page inner--page'>
        <div className='sign-in--content'>
          <h3>Login</h3>
          <div className='sign-in--form'>
            <Field type='email' value={this.state.email} onChange={e => this.onFieldChange('email', e)} placeholder='Email' name='email' />
            <Field type='password' value={this.state.password} onChange={e => this.onFieldChange('password', e)} placeholder='Senha' name='password' />
          </div>
          <div className='sign-in--action'>
            <Button text='Entrar' onClick={() => this.onLogin()} />
            <Button text='Registrar-se' onClick={() => this.onSignUp()} />
          </div>
        </div>
      </div>
    )
  }
}

export default Signin;