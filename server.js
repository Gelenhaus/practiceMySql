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
            console.log(response);
            switch (response.options) {
                case "View all Employees":
                    viewAllEmployees();
                    break;
                case "View all Departments":
                    viewAllDepartments();
                    break;
                case "View all Roles":
                    viewAllRoles();
                    break;
                case "Add a role":
                    addArole();
                    break;
                case "Add a department":
                    addADepartment();
                    break;
                case "Add an employee":
                    addAEmployee();
                    break;
                default:
                    dbConnection.end();
            }

        });
};
/*
I still need to do joins to make sure i add the info from the other
tables into the search the person looks for..

add the ADD functions into the prompt 

submit the assignment
*/
function viewAllEmployees() {
    const query = "SELECT * FROM employees"

    dbConnection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)

        originalPrompt();
    }
    );
};

function viewAllDepartments() {
    const query = "SELECT * FROM departments"

    dbConnection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)

        originalPrompt();
    }
    );
};

function viewAllRoles() {
    const query = "SELECT * FROM roles"

    dbConnection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)

        originalPrompt();
    }
    );
};

function addADepartment() {
    inquirer.prompt([
        {
            name: 'addingDepartment',
            type: 'input',
            message: 'What is the name of the new department?'

        }
    ])
        .then((answer) => {
            const query = 'INSERT INTO departments (name) VALUES (?)'

            dbConnection.query(query, answer.addingDepartment, (err, res) => {
                if (err) throw err;
                console.table(res)

                originalPrompt();
            }
            );
        })
};

function addAEmployee() {
    inquirer.prompt([
        {
            name: 'employeeFirstName',
            type: 'input',
            message: 'What is the first name of the new employee?'
        },
        {
            name: "employeeLastName",
            type: 'input',
            message: "What is the last name of the new employee?"

        }
    ])
    const query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)"

    dbConnection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res)

        originalPrompt();
    }
    );
};

function addArole() {
    const query = "SELECT * FROM roles"

    dbConnection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)

        originalPrompt();
    }
    );
};