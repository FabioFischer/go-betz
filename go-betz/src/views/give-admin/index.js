import React from 'react';

import { Select, AdministrativeButton } from './../../components';
import { auth } from './../../services';

class GiveAdmin extends React.Component {
  state = {
    users: [],
    roles: [],
    user: 0,
    role: 0
  };

  handleCancel = () => this.props.history.push('matches');

  handleUserChange = (e, index, newValue) => this.setState({ user: newValue });
  handleRoleChange = (e, index, newValue) => this.setState({ role: newValue });

  async handleSave() {
    const requestBody = {
      userId: this.state.user, roleId: this.state.role
    };

    try {
      await auth.giveAdministrativePermission(requestBody);
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  async componentDidMount() {
    let users = await auth.getUsers() || [];
    let roles = await auth.getRoles() || [];

    users = users.map(u => Object.assign({}, { id: u.id, name: u.username }));

    this.setState({
      users,
      roles
    });
  }

  render() {
    return (
      <div className='new-match page'>
        <div className='new-match--content'>
          <h2>GIVE ADMIN</h2>
          <div className='new-match--form'>
            <form>
              <Select items={this.state.users} floatingLabelText='User' onChange={this.handleUserChange} value={this.state.user} />
              <Select items={this.state.roles} floatingLabelText='Role' onChange={this.handleRoleChange} value={this.state.role} />
            </form>
          </div>
          <div className='new-match--actions'>
            <AdministrativeButton label='save' secondary onTouchTap={this.handleSave.bind(this)} />
            <AdministrativeButton label='cancel' secondary onTouchTap={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}


export default GiveAdmin;