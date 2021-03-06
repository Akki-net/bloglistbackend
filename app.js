var cors = require('cors');
var express = require('express');
require('express-async-errors');
var app = express();
var middleware = require('./utils/middleware');
var loginRouter = require('./controllers/login');
var usersRouter = require('./controllers/users');
var blogsRouter = require('./controllers/blogs');
var config = require('./utils/config');
var logger = require('./utils/logger');
var mongoose = require('mongoose');

logger.info('connecting to ' + config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(function () {
          logger.info('connected to MongoDB');
})
  .catch(function (error) {
          logger.error('error connecting to MongoDB:', error.message);
})

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogsRouter);

if(process.env.NODE_ENV === "test"){
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.unknownEndPoint);
app.use(middleware.errorHandler);

module.exports = app