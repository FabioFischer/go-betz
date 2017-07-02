import React from 'react';

import { TextField, DatePicker, TimePicker, FlatButton } from 'material-ui';
import { Select } from './../../components';

import { team, match } from './../../services';

class NewMatch extends React.Component {
  state = {
    description: '',
    teamA: 0,
    teamB: 0,
    date: {},
    time: {},
    teams: []
  };

  handleDescriptionChange = (e, newValue) => this.setState({ description: newValue });
  handleTeamAChange = (e, index, newValue) => this.setState({ teamA: newValue });
  handleTeamBChange = (e, index, newValue) => this.setState({ teamB: newValue });
  handleDateChange = (e, newValue) => this.setState({ date: newValue });
  handleTimeChange = (e, newValue) => this.setState({ time: newValue });

  handleCancel = () => this.props.history.push('matches');

  async handleSave(event) {
    event.preventDefault();

    const requestBody = {
      description: this.state.description,
      teamA: this.state.teamA,
      teamB: this.state.teamB,
      date: this.state.date,
      time: this.state.time
    };

    try {
      await match.saveMatch(requestBody);

      alert('match created');

      this.props.location.push('matches');
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  }

  async componentDidMount() {
    const teams = await team.listTeams();

    this.setState({
      teams
    });
  }

  render() {
    return (
      <div className='new-match page'>
        <div className='new-match--content'>
          <h2>NEW MATCH</h2>
          <div className='new-match--form'>
            <form>
              <TextField name='description' onChange={this.handleDescriptionChange} floatingLabelText='Title' value={this.state.description} />
              <Select items={this.state.teams} floatingLabelText='Team A' onChange={this.handleTeamAChange} value={this.state.teamA} />
              <Select items={this.state.teams} floatingLabelText='Team B' onChange={this.handleTeamBChange} value={this.state.teamB} />
              <DatePicker autoOk floatingLabelText='Date' value={this.state.date} onChange={this.handleDateChange} />
              <TimePicker autoOk floatingLabelText='Time' value={this.state.time} onChange={this.handleTimeChange} />
            </form>
          </div>
          <div className='new-match--actions'>
            <FlatButton label='save' secondary onTouchTap={this.handleSave.bind(this)} />
            <FlatButton label='cancel' secondary onTouchTap={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewMatch;