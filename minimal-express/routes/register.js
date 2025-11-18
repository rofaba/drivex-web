const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'DriveX'
});

db.connect(err => {
    if (err) console.error('MySQL error:', err);
    else console.log('MySQL connection OK');
});

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/', (req, res) => {
    console.log('POST received:', req.body);

    const { username } = req.body;
    if (!username) return res.status(400).send('Username is required');

    const sql = 'INSERT INTO Users (username) VALUES (?)';
    db.query(sql, [username], (err, results) => {
        if (err) {
            console.error('DB error:', err);
            return res.status(500).send('Database error');
        }

        console.log('User inserted:', results);
        res.send('User saved successfully');
    });
});

module.exports = router;