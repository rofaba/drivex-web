const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuración de MySQL
const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'DriveX'
});

db.connect(err => {
    if (err) console.error('Error en MySQL:', err);
    else console.log('Conexión MySQL OK');
});

// GET /register -> muestra formulario
router.get('/', (req, res) => {
    res.render('registro');
});

// POST /register -> inserta usuario
router.post('/', (req, res) => {
    console.log('POST recibido:', req.body);

    const { username } = req.body;
    if (!username) return res.status(400).send('Se requiere nombre de usuario');

    const sql = 'INSERT INTO Users (username) VALUES (?)';
    db.query(sql, [username], (err, results) => {
        if (err) {
            console.error('Error en BD:', err);
            return res.status(500).send('Error en la base de datos');
        }

        console.log('Usuario insertado:', results);
        res.send('Usuario guardado correctamente');
    });
});

module.exports = router;