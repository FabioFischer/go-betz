module.exports = function (sequelize, DataTypes) {
  const Role = sequelize.define('t_role', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER
  });

  return Role;
};