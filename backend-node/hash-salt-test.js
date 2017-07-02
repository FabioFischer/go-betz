const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

const salt = crypto.randomBytes(512).toString('base64');
const iterations = 512;

const hash1 = pbkdf2.pbkdf2Sync('minha-senha-segura', salt, iterations, 32, 'sha512').toString('base64');
const attempt = pbkdf2.pbkdf2Sync('minha-senha-segura', salt, iterations, 32, 'sha512').toString('base64');

console.log('h', hash1);
console.log('a', attempt);

console.log('h === a', hash1 === attempt);