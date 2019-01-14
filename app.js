const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use('public', express.static('public'));
app.use(morgan(':method :url :status - :response-time ms'));

app.get('/', function (req, res) {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for / path');
  console.log('----------Ends-------------');
});

app.get('/admin', function (req, res) {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for /admin path');
  console.log('----------Ends-------------');
});

app.get('/admin/products', function (req, res) {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for /admin/products path');
  console.log('----------Ends-------------');
});

app.get('/user', function (req, res) {
  console.log('-----------Start------------');
  console.log('Request Headers', JSON.stringify(req.headers));
  res.send('You requested for /user path');
  console.log('----------Ends-------------');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
