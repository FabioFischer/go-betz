module.exports = function (sequelize, DataTypes) {
  const Transaction = sequelize.define('t_transaction', {
    transaction_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    credit_card: DataTypes.STRING,
    expiration_date: DataTypes.STRING,
    cvv: DataTypes.STRING,
    value: DataTypes.STRING,
    tran_name: DataTypes.STRING,
    tran_address: DataTypes.STRING,
    tran_fone: DataTypes.STRING
  });

  return Transaction;
};