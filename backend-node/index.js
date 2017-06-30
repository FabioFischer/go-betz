const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

require('./auth')(app);
require('./matches')(app);

app.get('/', (request, response) => { response.send('teste') });

const host = 'localhost';
const port = 5000;

app.listen(port, function () {
  console.log(`Server running at ${host}:${port}`)
});