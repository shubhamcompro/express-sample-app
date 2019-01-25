const express = require('express');
const morgan = require('morgan');

const app = express();
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(morgan(':method :url :status - :response-time ms'));
app.use('/public', express.static('public', {
  maxAge: 3600000,
}));

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

module.exports = app;
