const models = require('./../models');

const Match = models.t_match;
const Team = models.t_team;

const listMatches = async (request, response) => {
  const matches = await Match.findAll();
  const teams = await Team.findAll();

  const normalizedTeams = teams
    .map(team => team.dataValues);

  const normalizedMatches = matches
    .map(match => match.dataValues)
    .map(match => {
      const teamA = normalizedTeams.find(team => team.id === match.team_1_id);
      const teamB = normalizedTeams.find(team => team.id === match.team_2_id);

      let winner;

      if (match.fk_winner) winner = match.winner_id === teamA.id ? teamA : teamB;

      return {
        description: match.description,
        date: match.date,
        teamA,
        teamB,
        winner
      };
    });

  response.json(normalizedMatches);
};

const saveMatch = async (request, response) => {
  const { description, date, teamA, teamB } = request.body;

  const createdMatch = await Match.create({
    description,
    date,
    team_1_id: teamA,
    team_2_id: teamB
  });

  const normalizedMatch = createdMatch.dataValues;

  response.json({ match: normalizedMatch });
};

const declareWinner = (request, response) => {
  
};

const closeBets = (request, response) => {

};

module.exports = { listMatches, saveMatch, declareWinner, closeBets };