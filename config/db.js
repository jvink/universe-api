if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});