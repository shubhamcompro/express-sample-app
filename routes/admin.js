const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You requested for /admin path');
});

router.get('/products', (req, res) => {
  res.send('You requested for /admin/products path');
});

module.exports = router;
