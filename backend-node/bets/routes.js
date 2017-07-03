const actions = require('./actions');
const authHelper = require('./../helpers/auth');

module.exports = app => {
  app.get('/bets', authHelper.isAuthenticated, actions.listBets);

  app.post('/bets', authHelper.isAuthenticated, actions.saveBet);
};