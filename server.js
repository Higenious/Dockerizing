'use strict';

const express = require('express');
const CandidateRoute = require('./router/routes');
let log4js = require('log4js');
let  session = require('express-session')
let logger = log4js.getLogger('db connection');
logger.level = 'debug';
const PORT = 6009;
const app = express();


app.get('/', function (req, res) {
  res.send('welcome to candidate portal')
})


/** import all routes */
logger.info("routes  initializing");
app.use(session({ resave: true ,secret: 'You can Do it!' , saveUninitialized: true ,cookie:{maxAge:6000}}));
app.use('/api/v1', CandidateRoute); 

app.listen(PORT);
logger.info(`server started running on ${PORT}`);