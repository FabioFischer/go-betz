const actions = require('./actions');
const authHelper = require('./../helpers/auth');

module.exports = app => {
  app.get('/teams', actions.listTeams);

  app.post('/teams', actions.newTeam);
};