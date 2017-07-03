module.exports = function (sequelize, DataTypes) {
  const UserRole = sequelize.define('t_user_role', {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  });

  return UserRole;
};