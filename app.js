var cors = require('cors');
var express = require('express');
var app = express();
var middleware = require('./utils/middleware');
var blogsRouter = require('./controllers/blogs')

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndPoint);
app.use(middleware.errorHandler);

module.exports = app