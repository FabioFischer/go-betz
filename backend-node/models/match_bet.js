module.exports = function (sequelize, DataTypes) {
  const MatchBet = sequelize.define('t_match_bets', {
    match_bet_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    date: DataTypes.DATE
  });

  return MatchBet;
};