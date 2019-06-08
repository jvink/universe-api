require('dotenv').config();
const con = require('./config/db');
const express = require('express');
const app = express();

app.listen(process.env.PORT, () =>
  console.log(`Star gazing using port ${process.env.PORT}`),
);

con.connect((error) => {
    if (error) throw error;

    con.query(`SELECT * FROM planet`, (error, result) => {
        if (error) throw error;

        app.get('/', (req, res) => {
            res.send(result);
        });
    });
});