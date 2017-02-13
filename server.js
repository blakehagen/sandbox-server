'use strict';
const express = require('./server/config/express.js');
const app     = express();

// ROUTES //
require('./server/users/user.routes')(app);


// TEST ROUTE //
app.get('/api/v1/test', (req, res) => {
  res.status(200).send('Light \'em up! We good to go!');
});


// PORT //
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});