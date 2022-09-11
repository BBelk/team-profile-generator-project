const Employee = require("./Employee");

class Manager extends Employee {
  constructor(newName, newId, newEmail, officeNumber) {
    super(newName, newId, newEmail);
    this.officeNumber = officeNumber;
  }

  getOfficeNumer(){
    return this.officeNumber;
  }

  getRole(){
    return 'Manager';
  }
}

module.exports = Manager;
