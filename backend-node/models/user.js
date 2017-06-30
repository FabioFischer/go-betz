module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('t_user', {
    user_id: DataType.INTEGER,
    user_name: DataType.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_current_funds: DataTypes.FLOAT
  });

  return User;
};