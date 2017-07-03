module.exports = function (sequelize, DataTypes) {
  const Transaction = sequelize.define('t_transaction', {
    type: DataTypes.STRING, // add_credits, recover_credits, new_bet, win_bet, lost_bet
    user_id: DataTypes.INTEGER,
    value: DataTypes.STRING
  });

  return Transaction;
};