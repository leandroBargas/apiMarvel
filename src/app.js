const express = require('express');

// App
const app = express();
const cors = require('cors');
app.use(cors());

// Load routes
const indexRoutes = require('./routes');
app.use('/', indexRoutes);

module.exports = app;
