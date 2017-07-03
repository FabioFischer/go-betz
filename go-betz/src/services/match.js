import Fetch from './base';

const baseUrl = 'http://localhost:5000';

const listMatches = async () => {
  const api = Fetch.create(baseUrl);

  const matches = await api.get('/matches');

  return matches;
};

const saveMatch = async attributes => {
  const api = Fetch.create(baseUrl);

  const match = await api.post('/matches', attributes);

  return match;
};

const declareWinner = async attributes => {
  const api = Fetch.create(baseUrl);

  const match = await api.post('/matches/declare_winnner', attributes);

  return match;
};

const closeBets = async attributes => {
  const api = Fetch.create(baseUrl);

  const match = await api.post('/matches/close_bets', attributes);

  return match;
};

export default { listMatches, saveMatch, declareWinner, closeBets };