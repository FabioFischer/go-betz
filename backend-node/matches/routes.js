const actions = require('./actions');

module.exports = app => {
  app.get('/matches', actions.listMatches);

  app.get('/matches/:id', actions.getMatch);

  app.post('/matches', actions.saveMatch);
};