var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ error: 'A username and a password are required' });
  }
  req.session.username = username;
  return res.redirect('/home');
});

module.exports = router;