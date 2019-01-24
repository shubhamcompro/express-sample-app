const express = require('express');
const morgan = require('morgan');

const app = express();

app.use('public', express.static('public'));
app.use(morgan(':method :url :status - :response-time ms'));

app.get('/', (req, res) => {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for / path');
  console.log('----------Ends-------------');
});

app.get('/admin', (req, res) => {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for /admin path');
  console.log('----------Ends-------------');
});

app.get('/admin/products', (req, res) => {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for /admin/products path');
  console.log('----------Ends-------------');
});

app.get('/user', (req, res) => {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for /user path');
  console.log('----------Ends-------------');
});


module.exports = app;
