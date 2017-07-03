const authHelper = require('./../helpers/auth');
const models = require('./../models');

const Role = models.t_role;
const User = models.t_user;
const UserRole = models.t_user_role;

const signIn = async (request, response) => {
  const { email, password } = request.body;

  const users = await User.findAll({ where: { email } });

  if (!users.length) {
    response.status(403).json({ message: 'Usuário ou senha inválidos!' });
    return;
  }

  const user = users[0];
  const isSamePassword = authHelper.verifyPassword(password, user.hash, user.salt);

  if (!isSamePassword) {
    response.status(403).json({ message: 'Usuário ou senha inválidos!' });
    return;
  }

  response.set('x-access-token', authHelper.createToken(user));

  response.json({
    user: { id: user.id, email: user.email, username: user.username }
  });
};

const signUp = async (request, response) => {
  const { email, username, password } = request.body;

  const securePassword = authHelper.segurifyPassword(password);

  const newUser = await User.create({
    email,
    username,
    salt: securePassword.salt,
    hash: securePassword.hash
  });

  response.set('x-access-token', authHelper.createToken(newUser));

  const sanitazedUser = newUser.dataValues;

  response.json({
    user: { id: sanitazedUser.id, email: sanitazedUser.email, username: sanitazedUser.username }
  });
};

const alterUserRole = async (request, response) => {
  const { userId, roleId } = request.body;

  const ur = await UserRole.create({
    role_id: roleId,
    user_id: userId
  });

  response.json({ userRole: ur.dataValues });
};

const listUsers = async (request, response) => {
  const users = await User.findAll();

  const sanitazedUsers = users
    .map(user => user.dataValues)
    .map(user => Object.assign({}, { id: user.id, username: user.username }));

  response.json(sanitazedUsers);
};

const hasAdministrativeRole = async (request, response) => {
  const { userId } = request.body;
  const user = await User.findAll({ where: { id: userId } });

  if (!user) {
    return response.status(500).json();
  }

  const userRoles = await UserRole.findAll({ where: { user_id: userId } });
  const normalizedUserRoles = userRoles.map(ur => ur.dataValues);

  const roles = await Role.findAll();
  const normalizedRoles = roles.map(r => r.dataValues);

  const rr = [];

  normalizedUserRoles.forEach(async ur => {
    const role = normalizedRoles.find(nr => nr.id === ur.role_id);

    rr.push(role);
  });

  const isAdmin = rr.find(r => parseInt(r.level) > 1);

  if (isAdmin) {
    response.set('x-admin-token', authHelper.createToken(user));
  }

  response.json({ admin: { id: userId } });
};

const saveRole = async (request, response) => {
  const { name, level } = request.body;

  const role = await Role.create({
    name,
    level
  });

  response.json({ role: role.dataValues });
};

const getRoles = async (request, response) => {
  const roles = await Role.findAll();
  const normalizedRoles = roles.map(r => r.dataValues);

  response.json(normalizedRoles);
};

module.exports = { signIn, signUp, alterUserRole, listUsers, hasAdministrativeRole, saveRole, getRoles };