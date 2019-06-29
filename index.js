require('dotenv').config();
const con = require('./config/db');
const express = require('express');
const app = express();

app.listen(process.env.PORT, () =>
    console.log(`Star gazing using port ${process.env.PORT}`),
);

con.connect((error) => {
    if (error) throw error;

    app.get('/planets', (req, res) => {
        res.setHeader(`Access-Control-Allow-Origin`, `${process.env.ADDRESS}:${process.env.PORT}`);
        res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, OPTIONS, PUT, PATCH, DELETE`);
        res.setHeader(`Access-Control-Allow-Headers`, `X-Requested-With,content-type`);

        con.query(`SELECT * FROM planet`, (error, result) => {
            if (error) throw error;
            res.send(result);
        });
    });
});