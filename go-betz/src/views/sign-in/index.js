import React from 'react';

import { TextField, FlatButton } from 'material-ui';
import { auth, ls } from './../../services';

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

  handleSignup = () => this.props.history.push('sign-up');

  async handleLogin(event) {
    event.preventDefault();

    const requestBody = {
      email: this.state.email,
      password: this.state.password
    };

    try {
      const user = await auth.signIn(requestBody);

      ls.save('current_user', user);

      await auth.hasAdministrativeRole({ userId: user.id });

      this.props.history.push('matches');
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  render() {
    return (
      <div className='sign-in page inner--page'>
        <div className='sign-in--content'>
          <h2>LOGIN</h2>
          <div className='sign-in--form'>
            <form>
              <TextField name='email' value={this.state.email} floatingLabelText='Email' onChange={this.handleEmailChange} />
              <TextField name='password' value={this.state.password} floatingLabelText='Senha' onChange={this.handlePasswordChange} type='password' />
            </form>
          </div>
          <div className='sign-in--action'>
            <FlatButton label='sign-in' primary onTouchTap={this.handleLogin.bind(this)} />
            <FlatButton label='new user' primary onTouchTap={this.handleSignup} />
          </div>
        </div>
      </div>
    )
  }
}

export default Signin;