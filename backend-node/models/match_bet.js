module.exports = function(sequelize, DataTypes) {
  const MatchBet = sequelize.define('t_match_bets', {
    match_bet_id: DataType.INTEGER,
    match_id: DataType.INTEGER,
    user_id: DataType.INTEGER,
    team_id: DataType.INTEGER,
    value: DataType.FLOAT,
    data: DataType.STRING
  });

  return MatchBet;
};