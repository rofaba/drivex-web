var express = require('express');
var router = express.Router();

var vehicles = [
  { id: 'VA1243', category: 'Venta', brand: 'BMW', model: '335', year: 2005, vin: 'csrf2365', plate: 'TKG123', price: 9000, status: 'Reserved' },
  { id: 'VA1244', category: 'Venta', brand: 'BMW', model: '335', year: 2006, vin: 'csrf9876', plate: 'TKG456', price: 9100, status: 'Reserved' },
  { id: 'VA1245', category: 'Venta', brand: 'BMW', model: '335', year: 2007, vin: 'csrf6543', plate: 'TKG789', price: 9200, status: 'Reserved' },
  { id: 'VA1246', category: 'Venta', brand: 'BMW', model: '335', year: 2008, vin: 'csrf3456', plate: 'TKG234', price: 9300, status: 'Reserved' },
  { id: 'VA1247', category: 'Venta', brand: 'BMW', model: '335', year: 2009, vin: 'csrf1234', plate: 'TKG567', price: 9400, status: 'Reserved' },
  { id: 'VA1248', category: 'Venta', brand: 'Audi', model: 'A4', year: 2010, vin: 'csrf4578', plate: 'AKL980', price: 8700, status: 'Available' },
  { id: 'VA1249', category: 'Venta', brand: 'Audi', model: 'A4', year: 2011, vin: 'csrf7854', plate: 'AKL981', price: 8800, status: 'Available' },
  { id: 'VA1250', category: 'Venta', brand: 'Mercedes', model: 'C200', year: 2012, vin: 'csrf8876', plate: 'MER200', price: 12500, status: 'Reserved' },
  { id: 'VA1251', category: 'Venta', brand: 'Mercedes', model: 'C200', year: 2013, vin: 'csrf9987', plate: 'MER201', price: 12800, status: 'Reserved' },
  { id: 'VA1252', category: 'Venta', brand: 'Tesla', model: 'Model 3', year: 2019, vin: 'tsla1234', plate: 'EV300', price: 35000, status: 'Available' },
  { id: 'VA1253', category: 'Venta', brand: 'Tesla', model: 'Model Y', year: 2020, vin: 'tsla5678', plate: 'EV301', price: 42000, status: 'Reserved' }
];

function ensureAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  return res.redirect('/');
}

router.get('/', ensureAdmin, function (req, res) {
  res.render('admin', {
    adminEmail: req.session.username,
    vehicles: vehicles
  });
});

module.exports = router;
