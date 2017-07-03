const actions = require('./actions');

const authHelper = require('./../helpers/auth');


module.exports = app => {
  app.get('/auth/get_users', authHelper.isAdmin, actions.listUsers);

  app.get('/auth/get_roles', authHelper.isAdmin, actions.getRoles);

  app.post('/auth/save_role', authHelper.isAdmin, actions.saveRole);

  app.post('/auth/give_administrative_role', authHelper.isAdmin, actions.alterUserRole);

  app.post('/auth/sign_in', actions.signIn);

  app.post('/auth/sign_up', actions.signUp);

  app.post('/auth/has_administrative_role', actions.hasAdministrativeRole);
};