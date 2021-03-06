import React from 'react';

import { TextField } from 'material-ui';

import { AdministrativeButton } from './../../components';

import { team } from './../../services';

class NewTeam extends React.Component {
  state = {
    name: ''
  };

  handleNameChange = (e, newValue) => this.setState({ name: newValue });

  handleCancel = () => this.props.history.push('matches');

  async handleSave(event) {
    event.preventDefault();

    const requestBody = {
      name: this.state.name
    };

    try {
      await team.saveTeam(requestBody);

      this.props.history.push('matches');
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  }

  render() {
    return (
      <div className='new-team page'>
        <div className='new-team--content'>
          <h2>NEW TEAM</h2>
          <div>
            <form>
              <TextField name='name' floatingLabelText='Name' onChange={this.handleNameChange} value={this.state.name} />
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

export default NewTeam;