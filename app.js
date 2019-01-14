const express = require('express');
const app = express();
const port = 3000;

app.use('public', express.static('public'));

app.get('/', function (req, res) {
  res.send('You requested for / path');
});

app.get('/admin', function (req, res) {
  res.send('You requested for /admin path');
});

app.get('/admin/products', function (req, res) {
  res.send('You requested for /admin/products path');
});

app.get('/user', function (req, res) {
  res.send('You requested for /user path');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
