
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs

inquirer.prompt([
    {
        type: 'list',
        name: 'What is the position of this employee?',
        choices: [
            'Manager', 
            'Intern', 
            'Engineer'
        ]
    }
]) .then(({ position }) => { 
    switch(position) { 
        case ' Manager': 

        case ' Intern' : 

        case ' Engineer': 
        
    }
})