var express = require('express');
var router = express.Router();

router.get('/nosotros', (req, res) => {
  res.sendFile(path.resolve('../public/nosotros.html'));
});

module.exports = router;