import Fetch from './base';

const baseUrl = 'http://localhost:5000';

const listMatches = async () => {
  const api = Fetch.create(baseUrl);

  const matches = await api.get('/matches');

  return matches;
};

const saveMatch = async () => {
  const api = Fetch.create(baseUrl);

  const match = await api.post('/matches');

  return match;
};

export default { listMatches, saveMatch };