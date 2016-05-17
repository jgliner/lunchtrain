/*
This application uses a Node.js server with the Express web application framework.

The server is broken up into logical components with a separation of concerns to enhance clarity
and avoid confusion.  The components are as follows:

* server.js - bare bones server initialization

* auth.js - employs Passport authentication middleware to serialize and deserialize users while
  ensuring users are authenticated during site access attempts

* config.js - contains client id and client secret as well as a toggle for devMode (which prevents
  the need for constant authentication during testing)

* middleware.js - Contains all middleware for our application

* routes.js - Handles routing to all pages on our site

* slack.js - Handles all functionality related to Slack integration with our application

* utils.js - Contains all utility functions
*/

const express = require('express');
const app = express();
const LEX = require('letsencrypt-express');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// force should be false/ommitted in production code
const init = require('./db/dummyData');

var lex = LEX.create({
  configDir: require('os').homedir() + '/letsencrypt/etc',
  approveRegistration: function (hostname, cb) {
    cb(null, {
      domains: [hostname],
      email: 'jarrett.gliner@gmail.com',
      agreeTos: true
    });
  }
});

lex.onRequest = app;

init().then(() => {
  lex.listen([80], [443, 5001], function () {
    var protocol = ('requestCert' in this) ? 'https': 'http';
    console.log("Listening at " + protocol + '://localhost:' + this.address().port);
  });
});
module.exports = app;
