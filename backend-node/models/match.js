module.exports = function(sequelize, DataTypes) {
  const Match = sequelize.define('t_match', {
    team_a_id: DataTypes.INTEGER,
    team_b_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.STRING
  });

  return Match;
};