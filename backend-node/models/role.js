module.exports = function (sequelize, DataTypes) {
  const Role = sequelize.define('t_role', {
    role_id: DataTypes.INTEGER,
    role_name: DataTypes.STRING,
    role_level: DataTypes.INTEGER
  });

  return Role;
};