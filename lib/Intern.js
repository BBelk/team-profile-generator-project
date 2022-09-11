const Employee = require("./Employee");

class Intern extends Employee {
  constructor(newName, newId, newEmail, newSchool) {
    super(newName, newId, newEmail);
    this.school = newSchool;
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return "Intern";
  }

}

module.exports = Intern;
