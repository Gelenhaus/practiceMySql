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
    originalPrompt();
});

function originalPrompt() {
    inquirer
        .prompt({
            name: "options",
            type: "list",
            message: "Please select an option",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add a employee",
                "Add a department",
                "Add a role",
                "Exit"
            ]
        })
        .then(function (response) {
            switch (response.selection) {
                case "View all Employees":

                    break;
                case "View all Departments":

                    break;
                case "View all Roles":

                    break;
                default:
                    dbConnection.end();
            }

        });
};