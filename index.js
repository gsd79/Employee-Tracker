// import dependancies

const inquirer = require("inquirer");

// array of questions for user input in terminal
const questions = [
    {
        type: 'list',
        name: 'view all',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update employee role']
    }

    

]