module.exports = function (sequelize, DataTypes) {
  const Match = sequelize.define('t_match', {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    team_1_id: DataTypes.INTEGER,
    team_2_id: DataTypes.INTEGER,
    winner_id: DataTypes.INTEGER,
    isOpen: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
  });

  return Match;
};