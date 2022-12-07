
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const employee = []

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
            name: 'name',
            message: 'What is the name of this employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address this employee would use?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of this employee?',
        }
    ]) .then(({ position, email, id, name, }) => { 
        switch(position) { 
            case 'Manager': 
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Please provide the Office number.'
                }
            ]).then (({ officeNumber }) => {
                employee.push(new Manager(
                    name, 
                    id,
                    email,
                    officeNumber
                ))
                another()
                
                
            })
    // If chose Manager, ask about office Number 
            
            break; 
            case 'Intern' : 
            inquirer.prompt([ 
                {
                    type: 'input', 
                    name: 'school',
                    message: 'What is your alumni or what was your most recent schooling?'
                }
            ]).then(({ school }) => {
                employee.push(new Intern( 
                    name,
                    id,
                    email,
                    school
                ))
                another()
                

            })
    // If Chose Intern, ask about which School they are from
            break;
            case 'Engineer':
                inquirer.prompt([ 
                    {
                        type: 'input', 
                        name: 'github',
                        message: 'Can you please provide your github username?'
                    }
                ]).then(({ github }) => {
                    employee.push(new Intern( 
                        name,
                        id,
                        email,
                        github
                    ))
                    another()
                        
                })
             

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
        else renderHTMLFile()
        // else renderHTMLFile()
    })
}

function renderHTMLFile() {
    fs.writeFileSync('./index.html', /*html*/`
    <ul>
        ${employee.map(employee => /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Work Team Profile Generator</title> 
        </head> 
            <li>
                <div> 
                    <h1> ${employee.getName()}</h1>
                    <p>${employee.getEmail()}</p>
                    <p>${employee.getId()}</p>   
                </div>
            </li> 
        `)}  
    </ul>
    `)
}

newEmployee()