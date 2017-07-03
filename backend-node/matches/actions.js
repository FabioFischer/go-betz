const models = require('./../models');

const Match = models.t_match;
const Team = models.t_team;

const transactionHelper = require('./../helpers/transaction');

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

      if (match.winner_id) winner = match.winner_id === teamA.id ? teamA : teamB;

      return {
        id: match.id,
        description: match.description,
        isOpen: match.isOpen,
        teamA,
        teamB,
        winner
      };
    });

  response.json(normalizedMatches);
};

const saveMatch = async (request, response) => {
  const { description, teamA, teamB } = request.body;

  const createdMatch = await Match.create({
    description: description,
    team_1_id: teamA,
    team_2_id: teamB,
    isOpen: true
  });

  const normalizedMatch = createdMatch.dataValues;

  response.json({ match: normalizedMatch });
};

const declareWinner = async (request, response) => {
  const { matchId, teamId } = request.body;

  const updatedMatch = await Match.update({ winner_id: teamId, isOpen: false }, { where: { id: matchId } });
  const matches = await Match.findAll({ where: { id: matchId } });
  const normalizedMatch = matches[0].dataValues;

  transactionHelper.solveBets(normalizedMatch);

  response.json({ match: normalizedMatch });
};

const closeBets = async (request, response) => {
  const { matchId } = request.body;

  const updatedMatch = await Match.update({ isOpen: false }, { where: { id: matchId } });
  const matches = await Match.findAll({ where: { id: matchId } });
  const normalizedMatch = matches[0].dataValues;

  response.json({ match: normalizedMatch });

};

module.exports = { listMatches, saveMatch, declareWinner, closeBets };