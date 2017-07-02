import React from 'react';

import { TextField, FlatButton } from 'material-ui';
import { auth } from './../../services';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (event, newValue) => this.setState({ email: newValue });

  handlePasswordChange = (event, newValue) => this.setState({ password: newValue });

  handleSignup = () => super.goTo('sign-up');

  async handleLogin(event) {
    event.preventDefault();

    const requestBody = {
      email: this.state.email,
      password: this.state.password
    };

    try {
      await auth.signIn(requestBody);

      this.props.history.push('matches');
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  render() {
    return (
      <div className='sign-in page inner--page'>
        <div className='sign-in--content'>
          <h3>Login</h3>
          <div className='sign-in--form'>
            <form>
              <TextField hintText='example@example.com' name='email' value={this.state.email} floatingLabelText='Email' onChange={this.handleEmailChange} />
              <TextField hintText='minha-senha-segura' name='password' value={this.state.password} floatingLabelText='Senha' onChange={this.handlePasswordChange} type='password' />
            </form>
          </div>
          <div className='sign-in--action'>
            <FlatButton label='Entrar' primary onTouchTap={this.handleLogin.bind(this)} />
            <FlatButton label='Novo cadastro' primary onTouchTap={this.handleSignup} />
          </div>
        </div>
      </div>
    )
  }
}

export default Signin;