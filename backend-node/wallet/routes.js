const actions = require('./actions');
const authHelper = require('./../helpers/auth');

module.exports = app => {
  app.post('/wallet/add', actions.addCredits);

  app.post('/wallet/recover', actions.addCredits);

  app.get('/wallet/check', actions.checkCredits);
};