const actions = require('./actions');

module.exports = app => {
  app.get('wallet', actions.getWallet)
};