
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const employees = []

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs

function newEmployee() { 
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'What is the position of this employee?',
            choices: [
                'Manager', 
                'Intern', 
                'Engineer'
            ]
        },
        {
            type: 'input',
            name: 'Name',
            message: 'What is the name of this employee?',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is the email address this employee would use?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of this employee?',
        }
    ]) .then(({ position, email, id, name }) => { 
        switch(position) { 
            case 'Manager': 
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Please provide the Office number.'
                }
            ]).then (({ officeNumber }) => {
                employees.push(new Manager(
                    name, 
                    id,
                    email,
                    officeNumber
                ))
                
                another()
                
            })
    // If chose Manager, ask about office Number 
            
            break;
            case ' Intern' : 

    // If Chose Intern, ask about which School they are from
            break;
            case ' Engineer': 

    // If chose Engineer, ask about their Github

            break;
            default: 
            // There was nothing that applied to them
        
        }
    })
}

function another() { 
    return inquirer.prompt([
        {
            type: 'confirm', 
            name: 'more',
            message: 'Is there another employee you would like to add?'
        }
    ]).then(({ more }) => {
        if(more) newEmployee()
        console.log(employees)
        // else renderHTMLFile()
    })
}

newEmployee()