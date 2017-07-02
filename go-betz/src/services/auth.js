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

window.signIn = signIn

export default { signUp, signIn };