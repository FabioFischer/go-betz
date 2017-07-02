const actions = require('./actions');

module.exports = app => {
  app.post('transactions', actions.newTransaction)
};