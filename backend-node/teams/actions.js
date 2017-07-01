const models = require('./../models');
const Team = models.t_team;

const listTeams = async (request, response) => {
  const teams = await Team.findAll();

  const sanitazedTeams = teams
    .map(team => team.dataValues);

  response.json(sanitazedTeams);
};

const newTeam = async (request, response) => {
  const { name } = request.body;

  const newTeam = await Team.create({
    name
  });

  const sanitazedTeam = newTeam.dataValues;

  response.json({ team: sanitazedTeam });
};

module.exports = { newTeam, listTeams };