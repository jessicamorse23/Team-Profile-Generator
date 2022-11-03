// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// write the classes: employee, manager, intern
// write the command line app that collects the info
// write some code that, based on the info collected from command line, generates an HTML file

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const genHTML = require("./src/genHTML");
const employees = [];

// generate manager first
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter manager name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager email.",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "Please enter office number.",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      employees.push(manager);
    });
};

// add additional employees
const addEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Please choose employee role:",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "Please enter employee name:",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the employee email:",
        },
        // github input for engineer
        {
          type: "input",
          name: "github",
          message: "Please enter the employee github username:",
          when: (input) => input.role === "Engineer",
        },
        // school input for intern
        {
          type: "input",
          name: "school",
          message: "Please enter intern school:",
          when: (input) => input.role === "Intern",
        },
        // option to add additional team members
        {
          type: "confirm",
          name: "confirmAddEmployee",
          message: "Would you like to another team member?",
          default: false,
        },
      ])
      // push user input into employee array
      .then((employeeData) => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;
        if (role === "Engineer") {
          employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
          employee = new Intern(name, id, email, school);
        }
        employees.push(employee);
        if (confirmAddEmployee) {
          return addEmployee(employees);
        } else {
          return employees;
        }
      })
  );
};
// generate index.html
const writeFile = (data) => {
  fs.writeFile("index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
    }
  });
};
addManager()
  .then(addEmployee)
  .then((employees) => {
    return genHTML(employees);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
    console.log(err);
  });
