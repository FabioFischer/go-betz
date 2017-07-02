import React from 'react';
import { Card, CardActions, CardTitle, FlatButton } from 'material-ui';

class Match extends React.Component {
  state = {
    expanded: false
  };

  handleExpandChange = expanded => this.setState(prevState => ({ expanded: !prevState.expanded }));

  render() {
    const { description, teamA, teamB, date, winner } = this.props;

    if (winner) {
      if (winner.id === teamA.id) teamA.name = `👑 ${teamA.name} 👑`;
      if (winner.id === teamB.id) teamB.name = `👑 ${teamB.name} 👑`;
    }

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardTitle title={`${teamA.name} vs. ${teamB.name} ⏤ ${date}`} subtitle={description} />
        <CardActions>
          <FlatButton label='new bet' primary />
          <FlatButton label='close bets' secondary />
          <FlatButton label='declare winner' secondary />
        </CardActions>
      </Card>
    );
  }
}

export default Match;