const actions = require('./actions');

module.exports = app => {
  app.get('/auth/users', actions.listUsers);

  app.get('/auth/roles', actions.listRoles);

  app.post('/auth/alter_role', actions.alterUserRole);

  app.post('/auth/sign_in', actions.signIn);

  app.post('/auth/sign_up', actions.signUp);
};