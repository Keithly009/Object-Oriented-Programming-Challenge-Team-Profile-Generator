
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
    ]) .then(({ position, school, email, id, name, }) => { 
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
            inquirer.prompt([ 
                {
                    type: 'input', 
                    name: 'School',
                    message: 'What is your alumni or what was your most recent schooling?'
                }
            ]).then(({ school }) => {
                employees.push(new Intern( 
                    name,
                    id,
                    email,
                    school
                ))
                another()
                

            })
    // If Chose Intern, ask about which School they are from
            break;
            case ' Engineer':
                inquirer.prompt([ 
                    {
                        type: 'input', 
                        name: 'github',
                        message: 'Can you please provide your github username?'
                    }
                ]).then(({ github }) => {
                    employees.push(new Intern( 
                        name,
                        id,
                        email,
                        school
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
        ${employees.map(employee => /*html*/ ` 
            <li>
                <div> 
                    <h1> ${employee.getName()}</h1>
                    <p>${employee.getEmail()}</p>  
                </div>
            </li> 
        `)}  
    </ul>
    `)
}

newEmployee()