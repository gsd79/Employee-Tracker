// import dependancies

const inquirer = require("inquirer");
const mysql = require('mysql2');
const consoleTable = require('console.table');
const db = require('./db/connection')


db.connect((err) => {
    if (err) throw err;
    console.log('Successfully connected to the database.');
    queryUser();
});



// prompt user for choice
function queryUser() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'view all',
            message: 'What would you like to do?',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update employee role',
                'exit']
        }
    ])
        // conditionals for answer 
        .then((answer) => {
            switch (answer.option) {
                case 'view all departments':
                    viewDepartments();
                    break;
                case 'view all roles':
                    viewRoles();
                    break;
                case 'view all employees':
                    viewEmployees();
                    break;

                case 'add a department':
                    addDepartment();
                    break;

                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update employee role':
                    updateEmployee();
                    break;
                case 'exit':
                    db.end();
                    break;
            }
        }

        )
}


function viewDepartments() {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(results);
        queryUser();
    })
    }



function viewRoles() {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        queryUser();
    })
}
function viewEmployees() {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        queryUser();
    })
}
// function addDepartment() { }
// function addRole() { }
// function addEmployee() { }
// function updateEmployee() { }



