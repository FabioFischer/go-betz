const models = require('./../models');
const Bet = models.t_match_bets;

const listBets = async (request, response) => {
  const { userId } = request.body;

  const bets = await Bet.findAll({ where: { userId } });

  const sanitaziedBets = bets
    .map(bet => bet.dataValues)
    .map(bet => Object.assign({}));

  response.json(sanitaziedBets);
};

const saveBet = (request, body) => {
  const { matchId, teamId, userId, value } = request.body;

  response.json('save bet');
};

module.exports = { listBets, saveBet };

