import React from 'react';

import { TextField } from 'material-ui';

import { AdministrativeButton } from './../../components';

import { auth } from './../../services';

class NewRole extends React.Component {
  state = {
    name: '',
    level: 0
  };

  handleNameChange = (e, newValue) => this.setState({ name: newValue });
  handleLevelChange = (e, newValue) => this.setState({ level: newValue });

  handleCancel = () => this.props.history.push('matches');

  async handleSave(event) {
    event.preventDefault();

    const requestBody = {
      name: this.state.name,
      level: this.state.level
    };

    try {
      await auth.saveRole(requestBody);

      this.props.history.push('matches');
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  }

  render() {
    return (
      <div className='new-team page'>
        <div className='new-team--content'>
          <h2>NEW ROLE</h2>
          <div>
            <form>
              <TextField name='name' floatingLabelText='Name' onChange={this.handleNameChange} value={this.state.name} />
              <TextField name='level' floatingLabelText='Level' onChange={this.handleLevelChange} value={this.state.level} />
            </form>
          </div>
          <div className='new-team--actions'>
            <AdministrativeButton label='save' secondary onTouchTap={this.handleSave.bind(this)} />
            <AdministrativeButton label='cancel' secondary onTouchTap={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewRole;