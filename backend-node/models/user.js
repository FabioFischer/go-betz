module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('t_user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
    hash: DataTypes.STRING
  });

  return User;
};