import Fetch from './base';

const baseUrl = 'http://localhost:5000';

const listBets = async attributes => {
  const api = Fetch.create(baseUrl);

  const bets = await api.get('/bets', attributes);

  return bets;
};

const saveBet = async attributes => {
  const api = Fetch.create(baseUrl);

  const bet = await api.get('/bets', attributes);

  return bet;
};

export default { listBets, saveBet };