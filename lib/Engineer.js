const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
  // renderCard() {
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
  //     <li class="list-group-item">Office Number: ${this.github}</li>
  //   </ul>
  // </div>`;
  // }
}

module.exports = Engineer;
