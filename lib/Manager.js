const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getCard() {
    return `
    <p>${this.name}
    <br>${this.officeNumber}
    <br>${this.email}
    </p>`;
  }
}
module.exports = Manager;
