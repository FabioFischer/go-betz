const signIn = (request, response) => {
  const { username, password } = request.body;

  response.json('sign in');
};

const signUp = (request, response) => {
  const { email, username, password } = request.body;

  response.json('sign up');
};

const alterRole = (request, response) => {
  const { userId, roleId } = request.body;

  response.json('alter role');
};

const listUsers = (request, response) => {
  response.json('list users');
};

const listRoles = (request, response) => {
  response.json('list roles');
};

module.exports = { signIn, signUp, alterRole, listUsers, listRoles };