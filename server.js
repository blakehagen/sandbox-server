'use strict';

const express = require('./server/config/express.js');

const app = express();

app.get('/api/v1/test', (req, res) => {
  res.status(200).send('Light \'em up! We good to go!');
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log('Check me out on port', port);
});