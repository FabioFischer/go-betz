module.exports = function (sequelize, DataTypes) {
  const MatchBet = sequelize.define('t_match_bets', {
    match_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    pick_id: DataTypes.INTEGER,
    value: DataTypes.FLOAT
  });

  return MatchBet;
};