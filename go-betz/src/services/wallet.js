import Fetch from './base';

const baseUrl = 'http://localhost:5000';

const addCredits = async attributes => {
  const api = Fetch.create(baseUrl);

  const funds = await api.post('/wallet/add', attributes);

  return funds;
};

const recoverCredits = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const funds = await api.post('/wallet/recover', attributes);

  return funds;
};

const checkCredits = async (attributes) => {
  const api = Fetch.create(baseUrl);

  const funds = await api.post('/wallet/check', attributes);

  return funds;
}

export default { addCredits, recoverCredits, checkCredits };