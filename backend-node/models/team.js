module.exports = function (sequelize, DataTypes) {
  const Team = sequelize.define('t_team', {
    name: DataTypes.STRING
  });

  return Team;
};