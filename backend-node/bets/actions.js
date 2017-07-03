const models = require('./../models');

const transactionHelper = require('./../helpers/transaction');

const Match = models.t_match;
const Team = models.t_team;
const Bet = models.t_match_bets;

const getTeams = async () => {
  const teams = await Team.findAll();

  return teams
    .map(team => team.dataValues);
}

const getMatches = async () => {
  const matches = await Match.findAll();
  const teams = await getTeams();

  const findTeam = id => teams.find(team => team.id === id);

  return matches
    .map(match => match.dataValues)
    .map(match => {
      const teamA = findTeam(match.team_1_id);
      const teamB = findTeam(match.team_2_id);

      let winner;

      if (match.winner_id) winner = match.winner_id === teamA.id ? teamA : teamB;

      return {
        description: match.description, date: match.date, teamA, teamB, winner
      };
    });
}

const listBets = async (request, response) => {
  const { userId } = request.body;

  const matches = await getMatches();
  const teams = await getTeams();
  const bets = await Bet.findAll({ where: { user_id: userId } });

  const normalizedBets = bets
    .map(bet => bet.dataValues)
    .map(bet => {
      const match = matches.find(match => match.id === bet.match_id);
      const pick = teams.find(team => team.id === pick_id);

      return Object.assign({}, bet, { match, pick });
    });

  response.json(normalizedBets);
};

const saveBet = async (request, body) => {
  const { matchId, teamId, userId, value } = request.body;

  const createdBet = await Bet.create({
    value,
    pick_id: teamId,
    user_id: userId,
    match_id: matchId
  });

  await transactionHelper.newTransaction('new_bet', value, userId);

  response.json(createdBet);
};

module.exports = { listBets, saveBet };

