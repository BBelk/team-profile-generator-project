const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(newName, newId, newEmail, newGithub) {
    super(newName, newId, newEmail);
    this.github = newGithub;
  }

  getGithub(){
    return this.github;
  }

  getRole(){
    return "Engineer";
  }
}

module.exports = Engineer;
