class Employee {

  constructor(newName, newId, newEmail) {
    this.name = newName;
    this.id = newId;
    this.email = newEmail;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole(){
    return 'Employee';
  }

}

module.exports = Employee;
