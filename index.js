const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const dbConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '@@88Fblthp1930',
        database: 'workers'
    },
    console.log('Connected to the workers database.')
);
dbConnection.connect(function (err) {
    if (err) throw err;
});