
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) { 
        super(name, id, email, 'Intern')
        this.school = school
    }
    
    getRole() { 
        return this.role;
    }

    getSchool() { 
        return this.school
    }

}

module.exports = Intern;
