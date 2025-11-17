var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ error: 'Se requiere un nombre de usuario y una contraseña' });
  }
  // Guardar el usuario en sesión y redirigir a home
  req.session.username = username;
  return res.redirect('/home');
});

module.exports = router;

