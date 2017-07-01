const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const iterations = 256;
const keylength = 32;
const digest = 'sha512';

const segurifyPassword = password => {
  const salt = crypto.randomBytes(128).toString('base64');
  const hash = pbkdf2.pbkdf2Sync(password, salt, iterations, keylength, digest).toString('base64');

  return { salt, hash };
};

const verifyPassword = (attempt, hash, salt) => {
  const attemptHash = pbkdf2.pbkdf2Sync(attempt, salt, iterations, keylength, digest).toString('base64');

  return attemptHash === hash;
};

const createToken = user => {
  const options = {};

  return jwt.sign('oxe-mas-isso-é-bom-demais-so', process.env.TOKEN_SECRET, options);
};

const isAuthenticated = (request, response, next) => {
  const token = request.headers['x-access-token'];

  if (!token) {
    return response.status(403).send({ success: false, message: 'Não autorizado!' });
  }

  const secret = process.env.TOKEN_SECRET;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return response.status(403).send({ success: false, message: 'Não autorizado!' });

    request.decoded = decoded;
    next();
  });
};

module.exports = {
  segurifyPassword,
  verifyPassword,
  isAuthenticated,
  createToken
};