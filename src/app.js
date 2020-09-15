const express = require('express');

// App
const app = express();

// Load routes
const indexRoutes = require('./routes');
app.use('/', indexRoutes);

module.exports = app;
