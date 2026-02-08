const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./routes/sneaks.routes.js')(app);
require('dotenv').config();
const SneaksAPI = require('./controllers/sneaks.controllers.js');

var port = process.env.PORT || 4000;
mongoose.Promise = global.Promise;

// Only start server if not being imported as a module
if (require.main === module) {
  app.listen(port, function () {
    console.log(`Sneaks app listening on port `, port);
  });
}

module.exports = app;
module.exports = SneaksAPI;