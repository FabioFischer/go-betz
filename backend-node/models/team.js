module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define('t_team', {
    team_id: DataType.INTEGER,
    team_name: DataType.STRING
  });

  return Team;
};