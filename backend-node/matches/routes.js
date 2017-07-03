const actions = require('./actions');
const authHelper = require('./../helpers/auth');

module.exports = app => {
  app.get('/matches', actions.listMatches);

  app.post('/matches', authHelper.isAuthenticated, actions.saveMatch);

  app.post('/matches/close_bets', authHelper.isAuthenticated, actions.closeBets);

  app.post('/matches/declare_winnner', authHelper.isAuthenticated, actions.declareWinner);
};