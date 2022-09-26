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

renderCard() {
  return `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h2 class="card-title">${this.name}</h2>
<h3>${this.getRole}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${this.id}</li>
    <li class="list-group-item">email: <a href="mailto:${this.email}">${this.email}</a></li>
    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
  </ul>
</div>`
}
}
module.exports = Manager;
