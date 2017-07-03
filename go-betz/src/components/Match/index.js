import React from 'react';
import { Card, CardActions, CardTitle, Dialog, TextField } from 'material-ui';

import { AuthenticatedButton, AdministrativeButton } from './../../components'

import { match, bet, ls } from './../../services';

class Match extends React.Component {
  state = {
    expanded: false,
    modalOpen: false,
    value: 0,
    dialog: 0
  };

  handleExpandChange = expanded => this.setState(prevState => ({ expanded: !prevState.expanded }));

  handleClose = () => this.setState({ modalOpen: false });

  handleDeclareWinner = () => this.setState({ dialog: 1, modalOpen: true });

  handleNewBet = () => this.setState({ dialog: 0, modalOpen: true });

  async handleCloseBets(matchId) {
    const requestBody = {
      matchId
    };

    try {
      await match.closeBets(requestBody);

      window.location.reload();
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  async declareWinner(matchId, teamId) {
    const requestBody = {
      matchId, teamId
    };

    try {
      await match.declareWinner(requestBody);

      this.setState({ modalOpen: false });

      window.location.reload();
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  handleValueChange = (e, newValue) => this.setState({ value: newValue });

  async betOn(matchId, teamId) {
    const currentUser = ls.get('current_user');
    const userId = currentUser ? currentUser.id : 0

    const requestBody = {
      matchId, teamId, userId
    };

    try {
      await bet.saveBet(requestBody);

      this.setState({ modalOpen: false });

      this.props.history.push('my-bets');
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  }

  newBetDialog(matchId, teamA, teamB) {
    const actions = [
      <AuthenticatedButton primary label={teamA.name} onTouchTap={() => this.betOn(matchId, teamA.id)} />,
      <AuthenticatedButton primary label={teamB.name} onTouchTap={() => this.betOn(matchId, teamB.id)} />
    ];

    return (
      <Dialog
        title="Inform the amount of credits and choose a team"
        actions={actions}
        modal={false}
        open={this.state.modalOpen}
        onRequestClose={this.handleClose}
      >
        <TextField name='value' floatingLabelText='Credit amount' onChange={this.handleValueChange} />
      </Dialog>
    );
  }

  delcareWinnerDialog(matchId, teamA, teamB) {
    const actions = [
      <AdministrativeButton primary label={teamA.name} onTouchTap={() => this.declareWinner(matchId, teamA.id)} />,
      <AdministrativeButton primary label={teamB.name} onTouchTap={() => this.declareWinner(matchId, teamB.id)} />
    ];

    return (
      <Dialog
        title="Choose the winner team"
        actions={actions}
        modal={false}
        open={this.state.modalOpen}
        onRequestClose={this.handleClose}
      >
      </Dialog>
    );
  }

  render() {
    const { id, description, teamA, teamB, winner, isOpen } = this.props;

    let teamAName = teamA.name;
    let teamBName = teamB.name

    if (winner) {
      if (winner.id === teamA.id) teamAName = `👑 ${teamA.name} 👑`;
      if (winner.id === teamB.id) teamBName = `👑 ${teamB.name} 👑`;
    }

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardTitle title={`${teamAName} vs. ${teamBName}`} subtitle={description} />
        <CardActions>
          {isOpen && <AuthenticatedButton label='new bet' primary onTouchTap={this.handleNewBet} />}
          {isOpen && <AdministrativeButton label='close bets' secondary onTouchTap={() => this.handleCloseBets(id)} />}
          {!winner && <AdministrativeButton label='declare winner' secondary onTouchTap={this.handleDeclareWinner} />}
        </CardActions>
        {this.state.dialog === 0 && this.newBetDialog(id, teamA, teamB)}
        {this.state.dialog === 1 && this.delcareWinnerDialog(id, teamA, teamB)}
      </Card>
    );
  }
}

export default Match;