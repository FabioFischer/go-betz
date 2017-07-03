require('dotenv').config();

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  exposedHeaders: ['x-access-token', 'x-admin-token']
};

app.use(bodyParser.json());
app.use(cors(corsOptions));


require('./auth')(app);
require('./matches')(app);
require('./bets')(app);
require('./matches')(app);
require('./teams')(app);
require('./wallet')(app);

const host = 'localhost';
const port = 5000;

const database = require('./models');

app.set('token_secret', process.env.TOKEN_SECRET);

app.listen(port, () => console.log(`Server running at ${host}:${port}`));

const models = require('./models');

const Role = models.t_role;
const UserRole = models.t_user_role;

// Role.create({
//   name: 'Admin I',
//   level: 5
// });

// Role.create({
//   name: 'Admin II',
//   level: 10
// });

// UserRole.create({
//   user_id: 1,
//   role_id: 1
// });



// database
//   .sequelize
//   .query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
//   .then(() => database.sequelize.sync({ force: true })
//     .then(() => app.listen(port, () => console.log(`Server running at ${host}:${port}`))));