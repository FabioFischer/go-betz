const actions = require('./actions');

module.exports = app => {
  app.get('/matches', actions.listMatches);

  app.post('/matches', actions.saveMatch);

  app.post('/matches/close_bets/:id', actions.closeBets);

  app.post('/matches/declare_winenr/:id', actions.declareWinner);
};