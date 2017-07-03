import Fetch from './base';

const baseUrl = 'http://localhost:5000';

const signIn = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const { user } = await api.post('/auth/sign_in', attributes);

  return user;
};

const signUp = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const { user } = await api.post('/auth/sign_up', attributes);

  return user;
};

const hasAdministrativeRole = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const user = await api.post('/auth/has_administrative_role', attributes);

  return user;
};

const giveAdministrativePermission = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const { user } = await api.post('/auth/give_administrative_role', attributes);

  return user;
}

const getUsers = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const users = await api.get('/auth/get_users', attributes);

  return users;
}

const getRoles = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const roles = await api.get('/auth/get_roles', attributes);

  return roles;
};

const saveRole = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const role = await api.post('/auth/save_role', attributes);

  return role;
};

export default { signUp, signIn, hasAdministrativeRole, giveAdministrativePermission, getUsers, getRoles, saveRole };