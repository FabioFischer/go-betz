require('dotenv').config();

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


require('./auth')(app);
require('./matches')(app);
require('./bets')(app);
require('./matches')(app);
require('./teams')(app);
require('./transactions')(app);
require('./wallet')(app);

const host = 'localhost';
const port = 5000;

const database = require('./models');

app.set('token_secret', process.env.TOKEN_SECRET);

database
  .sequelize
  .query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
  .then(() => database.sequelize.sync({ force: true })
    .then(() => app.listen(port, () => console.log(`Server running at ${host}:${port}`))));