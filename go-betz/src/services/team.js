import Fetch from './base';

const baseUrl = 'http://localhost:5000';

const saveTeam = async attributes => {
  const api = Fetch.create(baseUrl);

  const { team } = await api.post('/teams', attributes);

  return team;
};

const listTeams = async () => {
  const api = Fetch.create(baseUrl);

  const teams = await api.get('/teams');
  
  return teams;
};

export default { saveTeam, listTeams };