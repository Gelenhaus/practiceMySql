const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const dbConnection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'workers'
    },
    console.log('Connected to the workers database.')
);
dbConnection.connect(function (err) {
    if (err) throw err;
});