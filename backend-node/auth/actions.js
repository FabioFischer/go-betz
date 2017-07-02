const authHelper = require('./../helpers/auth');
const models = require('./../models');
const User = models.t_user;

const signIn = async (request, response) => {
  const { email, password } = request.body;

  const users = await User.findAll({ where: { email } });

  if (!users.length) {
    response.json({ message: 'Usuário ou senha inválidos!' });
    return;
  }

  const user = users[0];
  const isSamePassword = authHelper.verifyPassword(password, user.hash, user.salt);

  if (!isSamePassword) {
    response.json({ message: 'Usuário ou senha inválidos!' });
    return;
  }

  response.header('x-access-token', authHelper.createToken(user));

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

  const sanitazedUser = newUser.dataValues;

  response.json({
    user: { id: sanitazedUser.id, email: sanitazedUser.email, username: sanitazedUser.username }
  });
};

const alterUserRole = (request, response) => {
  const { userId, roleId } = request.body;

  response.json('alter role');
};

const listUsers = async (request, response) => {
  const users = await User.findAll();

  const sanitazedUsers = users
    .map(user => user.dataValues)
    .map(user => Object.assign({}, { id: user.id, username: user.username }));

  response.json(sanitazedUsers);
};

const listRoles = (request, response) => {
  response.json('list roles');
};

module.exports = { signIn, signUp, alterUserRole, listUsers, listRoles };