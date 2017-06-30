const listMatches = (request, response) => {
  response.json('list matches');
};

const saveMatch = (request, response) => {
  response.json('save match');
};

const getMatch = (request, response) => {
  response.json('get match');
};

module.exports = { listMatches, saveMatch, getMatch };