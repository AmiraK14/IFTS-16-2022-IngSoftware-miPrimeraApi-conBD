const express = require("express");
const cors = require("cors");
const middleware = require('./utils/middleware.js');
const keepalive = require('./controller/keepAlive.js')
const entryController = require('./controller/entry.js');
const loginController = require('./controller/login');

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use(middleware.processToken);

app.use('/keepalive', keepalive);
app.use('/expedientes',entryController)
app.use('/login',loginController);

app.use(middleware.unknownEndpoint);


module.exports = app;