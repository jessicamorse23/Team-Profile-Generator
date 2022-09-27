const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
  //  renderCard() {
  //   return `
  //   <div class="card" style="width: 18rem;">
  //   <img src="..." class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h2 class="card-title">${this.name}</h2>
  // <h3>${this.getRole}</h3>
  //   </div>
  //   <ul class="list-group list-group-flush">
  //     <li class="list-group-item">ID: ${this.id}</li>
  //     <li class="list-group-item">email: <a href="mailto:${this.email}">${this.email}</a></li>
  //     <li class="list-group-item">Office Number: ${this.school}</li>
  //   </ul>
  // </div>`
  // }
}
module.exports = Intern;
