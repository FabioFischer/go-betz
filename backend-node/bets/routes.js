const actions = require('./actions');

module.exports = app => {
  app.get('/bets', actions.listBets);

  app.post('/bets', actions.saveBet);
};