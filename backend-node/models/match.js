module.exports = function(sequelize, DataTypes) {
  const Match = sequelize.define('t_match', {
    match_id: DataTypes.INTEGER,
    match_description: DataTypes.STRING,
    team_id_1: DataTypes.INTEGER,
    team_id_2: DataTypes.INTEGER,
    winner_team_id: DataTypes.INTEGER,
    date: DataTypes.STRING
  });

  return Match;
};