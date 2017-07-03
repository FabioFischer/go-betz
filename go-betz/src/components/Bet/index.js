import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

class Bet extends React.Component {
  state = {
    expanded: false
  };

  render() {
    const { match, pick, value } = this.props;

    const { description, teamA, teamB, winner } = match;

    let expandedDescription = `I bet ${value} credits on ${pick.name}. `;

    if (winner) {
      if (winner.id === teamA.id) teamA.name = `👑 ${teamA.name} 👑`;
      if (winner.id === teamB.id) teamB.name = `👑 ${teamB.name} 👑`;

      if (winner.id === pick.id) expandedDescription = expandedDescription.concat('I won the bet 🤑');
      else expandedDescription = expandedDescription.concat(`I lost the bet 😔`);
    }

    return (
      <Card>
        <CardTitle title={`${teamA.name} vs. ${teamB.name}`} subtitle={description} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          <CardTitle title={expandedDescription} />
        </CardText>
      </Card>
    );
  }
}

export default Bet;